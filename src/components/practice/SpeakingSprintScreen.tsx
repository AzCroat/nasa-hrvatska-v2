import React, { useState, useRef, useEffect } from 'react';
import { markQuest } from '../../lib/quests.js';
import { useStats } from '../../context/StatsContext';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { isSpeechRecognitionSupported } from '../../lib/platform.js';
import { ttsFetch } from '../../lib/audio.js';
import { getVoicePreference } from '../../lib/soundSettings.js';
import SprintSetupScreen from './SprintSetupScreen';
import SprintCountdownScreen from './SprintCountdownScreen';
import SprintSpeakingPhase from './SprintSpeakingPhase';
import SprintModelPhase from './SprintModelPhase';
import SprintFeedbackPhase from './SprintFeedbackPhase';
import { lsGet } from '../../lib/safeStorage';

// ─────────────────────────────────────────────
// KEYFRAME STYLES
// ─────────────────────────────────────────────
const SPRINT_STYLES = `
@keyframes sprint-pulse {
  0%   { transform: scale(1);   opacity: 0.7; }
  100% { transform: scale(2.2); opacity: 0;   }
}
@keyframes sprint-rec-dot {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}
@keyframes sprint-countdown {
  0%   { transform: scale(0.6); opacity: 0; }
  30%  { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1);   opacity: 1; }
}
`;

// ─────────────────────────────────────────────
// SPEAKING PROMPTS — A1–C2 ladder (42 prompts)
// ─────────────────────────────────────────────
const PROMPTS = {
  A1: [
    { hr: 'Kako se zoveš?', en: 'What is your name?', model_response: 'Zovem se Ana. A ti?' },
    {
      hr: 'Odakle si?',
      en: 'Where are you from?',
      model_response: 'Ja sam iz Splita. A ti, odakle si?',
    },
    {
      hr: 'Koliko imaš godina?',
      en: 'How old are you?',
      model_response: 'Imam trideset godina. A ti?',
    },
    {
      hr: 'Što radiš?',
      en: 'What do you do?',
      model_response: 'Ja sam učiteljica. A ti, što radiš?',
    },
    {
      hr: 'Govoriš li hrvatski?',
      en: 'Do you speak Croatian?',
      model_response: 'Da, govorim hrvatski. Učim ga svaki dan.',
    },
    {
      hr: 'Sviđa ti se Hrvatska?',
      en: 'Do you like Croatia?',
      model_response: 'Da, jako mi se sviđa! Hrvatska je prekrasna zemlja.',
    },
    {
      hr: 'Što voliš jesti?',
      en: 'What do you like to eat?',
      model_response: 'Volim janjetinu i dagnje. A ti, što voliš?',
    },
    {
      hr: 'Imaš li kućnog ljubimca?',
      en: 'Do you have a pet?',
      model_response: 'Da, imam psa. Zove se Bruno.',
    },
  ],
  A2: [
    {
      hr: 'Opiši svoju obitelj.',
      en: 'Describe your family.',
      model_response:
        'Imam malu obitelj. Živim s roditeljima i sestrom. Tata radi kao inženjer, a mama je liječnica.',
    },
    {
      hr: 'Što si radio/radila jučer?',
      en: 'What did you do yesterday?',
      model_response:
        'Jučer sam išla na tržnicu ujutro, a poslijepodne sam čitala knjigu i pila kavu s prijateljicom.',
    },
    {
      hr: 'Opiši svoju kuću ili stan.',
      en: 'Describe your house or apartment.',
      model_response:
        'Živim u malom stanu u centru grada. Imam dnevni boravak, jednu spavaću sobu i malu kuhinju.',
    },
    {
      hr: 'Što planiraš raditi ovog vikenda?',
      en: 'What are you planning to do this weekend?',
      model_response:
        'Ovaj vikend idem u Dubrovnik s prijateljima. Planiram posjetiti stari grad i pojesti dobru ribu.',
    },
    {
      hr: 'Koji je tvoj omiljeni film?',
      en: 'What is your favourite film?',
      model_response:
        'Moj omiljeni film je "Tko pjeva zlo ne misli". To je stara hrvatska komedija, jako smiješna.',
    },
    {
      hr: 'Pričaj mi o svom gradu.',
      en: 'Tell me about your city.',
      model_response:
        'Živim u Zagrebu. To je glavni grad Hrvatske. Ima lijepe parkove, muzeje i odličnu kafićsku kulturu.',
    },
    {
      hr: 'Kako provodiš slobodno vrijeme?',
      en: 'How do you spend your free time?',
      model_response:
        'U slobodno vrijeme volim čitati, šetati po gradu i kuhati. Ponekad idem na koncerte.',
    },
    {
      hr: 'Što misliš o učenju stranih jezika?',
      en: 'What do you think about learning foreign languages?',
      model_response:
        'Mislim da je učenje stranih jezika jako korisno. Otvara vrata novim kulturama i prijateljstvima.',
    },
  ],
  B1: [
    {
      hr: 'Zašto učiš hrvatski?',
      en: 'Why are you learning Croatian?',
      model_response:
        'Učim hrvatski jer imam prijatelje iz Hrvatske i želim bolje razumjeti njihovu kulturu i humor. Jezik je ključ za pravo razumijevanje naroda.',
    },
    {
      hr: 'Opiši najljepše putovanje u svom životu.',
      en: 'Describe the most beautiful trip of your life.',
      model_response:
        'Najljepše putovanje u mom životu bilo je na Plitvička jezera. Boje vode — od smaragdno zelene do turkizno plave — jednostavno su nevjerojatne.',
    },
    {
      hr: 'Što misliš o modernoj tehnologiji?',
      en: 'What do you think about modern technology?',
      model_response:
        'Moderna tehnologija ima i prednosti i mana. S jedne strane, olakšava komunikaciju i pristup informacijama. S druge strane, previše vremena provodimo ispred zaslona.',
    },
    {
      hr: 'Kakav bi bio tvoj idealan dan?',
      en: 'What would your ideal day look like?',
      model_response:
        'Idealan dan bi počeo s kavom na terasi s pogledom na more. Potom bih plivao, ručao svježu ribu, a večer proveo s dobrim prijateljima uz gitaru.',
    },
    {
      hr: 'Što ti znači dom?',
      en: 'What does home mean to you?',
      model_response:
        'Dom mi znači mjesto gdje se osjećam sigurno i opušteno. Nije nužno fizičko mjesto — može biti i s određenim ljudima.',
    },
    {
      hr: 'Kakva je razlika između prijatelja i poznanika?',
      en: 'What is the difference between a friend and an acquaintance?',
      model_response:
        'Poznanik je netko koga poznaješ, ali s kim nemaš duboku vezu. Pravi prijatelj je onaj koji te prihvaća takva kakav jesi i uz tebe je u dobrim i lošim trenucima.',
    },
  ],
  B2: [
    {
      hr: 'Što misliš o klimatskim promjenama i odgovornosti pojedinca?',
      en: 'What do you think about climate change and individual responsibility?',
      model_response:
        'Klimatske promjene su jedan od najvećih izazova našeg vremena. Mislim da svaki pojedinac mora preuzeti odgovornost — od smanjenja potrošnje plastike do svjesnijeg putovanja. Ali bez sustavnih promjena od strane vlada i korporacija, individualni napori nisu dovoljni.',
    },
    {
      hr: 'Kako bi opisao/opisala hrvatsku kulturu nekome tko nikad nije bio u Hrvatskoj?',
      en: 'How would you describe Croatian culture to someone who has never been to Croatia?',
      model_response:
        'Hrvatska je zemlja kontrasta — između kontinentalne tradicije i mediteranskog načina života, između burne povijesti i opuštene sadašnjosti. Hrvati su ponosni na svoju kulturu, goste dočekuju s toplinom, a kava uz razgovor je gotovo sveta institucija.',
    },
    {
      hr: 'Raspravi o prednostima i nedostacima urbanog i ruralnog života.',
      en: 'Discuss the advantages and disadvantages of urban and rural life.',
      model_response:
        'Urbani život nudi raznolikost — posao, kulturu, anonimnost. Ali nosi i stres, buku i otuđenost. Ruralni život je mirniji, s jačim zajedništvom, ali ograničenijim prilikama. Idealno bi bilo kombinirati oboje — živjeti u prirodi, a imati pristup gradskim sadržajima.',
    },
  ],
  C1: [
    {
      hr: 'Da možeš promijeniti jednu odluku iz prošlosti, koju bi promijenio i zašto?',
      en: 'If you could change one past decision, which would you change and why?',
      model_response:
        'Iskreno, dugo bih razmišljao. Možda bih ranije počeo ozbiljno učiti jezike — da sam s tim krenuo u srednjoj školi, danas bi mi mnoga vrata bila otvorena. S druge strane, upravo su me zaobilazni putevi doveli ovamo, pa nisam siguran da bih išta dirao.',
    },
    {
      hr: 'Koje su prednosti i mane života u malom mjestu naspram velikoga grada?',
      en: 'What are the advantages and disadvantages of living in a small town versus a big city?',
      model_response:
        'U malom mjestu čovjek ima mir, povjerenje susjeda i more vremena koje ne gubi u prometu. S druge strane, izbor poslova i sadržaja je skučen, a anonimnosti nema — sve se zna. Grad nudi obrnuto: prilike i slobodu, ali i gužvu, skupoću i samoću u mnoštvu.',
    },
    {
      hr: 'Treba li umjetna inteligencija imati ograničenja? Obrazloži svoj stav.',
      en: 'Should artificial intelligence have limits? Justify your position.',
      model_response:
        'Smatram da treba, i to jasna. Tehnologija sama po sebi nije ni dobra ni loša, ali bez pravila moć se uvijek zloupotrijebi. Ograničenja ne smiju gušiti razvoj — trebaju osigurati da razvoj služi ljudima, a ne obrnuto.',
    },
    {
      hr: 'Opiši osobu koja je najviše utjecala na tvoj pogled na svijet.',
      en: 'Describe the person who most influenced your view of the world.',
      model_response:
        'To je bez sumnje moja baka. Nije imala visoke škole, ali je imala ono što se ne uči — mjeru. Naučila me da se o ljudima sudi po djelima, a ne po riječima, i da se najveće stvari kažu tiho. Kad god moram donijeti tešku odluku, pitam se što bi ona rekla.',
    },
    {
      hr: 'Što bi u svom gradu promijenio kad bi sutra postao gradonačelnik?',
      en: 'What would you change in your city if you became mayor tomorrow?',
      model_response:
        'Prvo bih se pozabavio javnim prijevozom — dok autobus vozi svakih sat vremena, svi će voziti auto. Zatim bih otvorio urede uprave i poslijepodne, jer građani ne bi smjeli uzimati godišnji da bi izvadili papir. Male stvari, ali one mijenjaju svakodnevicu.',
    },
    {
      hr: 'Je li bolje biti stručnjak za jedno područje ili znati ponešto o svemu?',
      en: 'Is it better to be an expert in one field or to know a little about everything?',
      model_response:
        'Ovisi o razdoblju života. Karijera se gradi dubinom — bez stručnosti si zamjenjiv. Ali svijet se mijenja tako brzo da širina postaje osiguranje: tko zna ponešto o svemu, lakše se prilagodi. Idealno je, čini mi se, biti dubok u jednom, a znatiželjan u svemu.',
    },
    {
      hr: 'Kako objasniti strancu što znači riječ "inat"?',
      en: 'How would you explain the word "inat" to a foreigner?',
      model_response:
        'Rekao bih mu da inat nije obični prkos. To je kad nešto napraviš baš zato što su ti rekli da ne možeš — ne zbog koristi, nego zbog principa. Iracionalno? Potpuno. Ali mnoge stvari ovdje ne bi postojale da netko nije bio dovoljno "lud" da ih napravi iz inata.',
    },
    {
      hr: 'Što suvremeni način života čini našoj sposobnosti koncentracije?',
      en: 'What is the modern way of life doing to our ability to concentrate?',
      model_response:
        'Bojim se da je rastače. Navikli smo na podražaje svakih nekoliko sekundi, pa nam je i deset minuta tišine postalo neizdrživo. Primijetio sam to i na sebi: knjigu koju bih prije pročitao u komadu sad čitam u zalogajima. Zato svjesno vježbam dosadu — zvuči smiješno, ali djeluje.',
    },
  ],
  C2: [
    {
      hr: '„Tko ne poznaje svoju prošlost, osuđen je ponavljati je." Slažeš li se?',
      en: '"Those who do not know their past are condemned to repeat it." Do you agree?',
      model_response:
        'Načelno da, ali s ogradom: poznavanje prošlosti nije jamstvo, nego tek preduvjet. Povijest znaju i oni koji je zloupotrebljavaju — štoviše, najbolje je znaju. Presudno je, čini mi se, ne samo pamtiti što se dogodilo, nego razumjeti kako se dogodilo: mehanizam, a ne datum.',
    },
    {
      hr: 'Postoji li razlika između istine i iskrenosti?',
      en: 'Is there a difference between truth and honesty?',
      model_response:
        'Golema. Istina je svojstvo tvrdnje, iskrenost je svojstvo govornika — čovjek može iskreno govoriti neistinu i ciljano govoriti istinu da bi zavarao. Zato me kod sugovornika manje zanima je li u pravu, a više je li pošten prema vlastitim sumnjama.',
    },
    {
      hr: 'Obrazloži: je li jezik samo sredstvo komunikacije ili nešto više?',
      en: 'Argue: is language merely a means of communication or something more?',
      model_response:
        'Kad bi jezik bio samo alat, prijevod bi bio presvlačenje, a nije — svaki jezik krije vlastitu podjelu svijeta. Na hrvatskom se "žao mi je" i "oprosti" ne daju svesti jedno na drugo; tko to osjeti, razumije da jezikom ne opisujemo stvarnost nego je sukreiramo.',
    },
    {
      hr: 'Koja je uloga dosade u stvaralaštvu?',
      en: 'What is the role of boredom in creativity?',
      model_response:
        'Podcijenjena i presudna. Dosada je praznina koju um ne podnosi, pa je počne sam popunjavati — a upravo se u tom popunjavanju rađaju ideje. Kultura koja je dosadu iskorijenila zabavom možda je, ne sluteći, iskorijenila i dio svoje mašte. Najbolje mi ideje dolaze u redu čekanja, ne pred ekranom.',
    },
    {
      hr: 'Može li se domoljublje mjeriti? Ako da — čime?',
      en: 'Can patriotism be measured? If so — by what?',
      model_response:
        'Sigurno ne glasnoćom. Ako se išta mjeri, onda je to spremnost da zemlju učiniš boljom kad te nitko ne gleda: da platiš porez, vratiš knjigu, odgojiš dijete koje neće morati otići. Domoljublje bez računa koji se plaćaju samo je folklor s himnom.',
    },
    {
      hr: 'Zamisli da držiš govor budućim generacijama. Što im poručuješ u tri rečenice?',
      en: 'Imagine addressing future generations. What do you tell them in three sentences?',
      model_response:
        'Naslijedili ste svijet koji nismo dovršili — na tome se ispričavamo i ne ispričavamo, jer ni nama ga nitko nije predao gotova. Čuvajte ono što se sporo gradi, a brzo ruši: povjerenje, jezik, šume. I ne vjerujte nikome tko vam nudi jednostavan odgovor na složeno pitanje — uključujući ovaj govor.',
    },
    {
      hr: 'Zašto ljudi pričaju viceve o vlastitoj nesreći?',
      en: 'Why do people tell jokes about their own misfortune?',
      model_response:
        'Zato što je humor posljednji oblik vlasništva: nesreću koju mogu ispričati kao vic barem dijelom posjedujem, umjesto da ona posjeduje mene. Smijeh ne poriče bol — on joj otkazuje poslušnost. Narod koji se zna šaliti na svoj račun teško je trajno poraziti.',
    },
    {
      hr: 'Što bi u našem jeziku trebalo sačuvati pod svaku cijenu?',
      en: 'What in our language should be preserved at any cost?',
      model_response:
        'Padeže bih branio do zadnjeg daha, ali ne zbog gramatike, nego zbog onoga što nose: mogućnost da se ista misao kaže s deset nijansi. I dijalekte — jer standard je dogovor, a dijalekt je pamćenje. Jezik koji svede sve na jedan oblik postaje praktičan i siromašan, kao hotel bez domaćina.',
    },
  ],
};

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
const SR_SUPPORTED = isSpeechRecognitionSupported();

function pickPrompt(): SprintPrompt {
  const level = lsGet('nh_level') || 'B1';
  const levelKey = (
    ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].includes(level) ? level : 'B1'
  ) as keyof typeof PROMPTS;
  const pool = PROMPTS[levelKey] ?? PROMPTS.B1;
  return pool[Math.floor(Math.random() * pool.length)]!;
}

function getUserLevel() {
  const level = lsGet('nh_level') || 'B1';
  return ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].includes(level) ? level : 'B1';
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
interface Props {
  goBack: () => void;
  award: (n: number, celebrate?: boolean, activityType?: string) => void;
}

interface SprintPrompt {
  hr: string;
  en: string;
  model_response: string;
}

export default function SpeakingSprintScreen({ goBack, award }: Props) {
  const { isOnline } = useOnlineStatus();
  const { stats, setStats, writeDelta } = useStats();
  const [phase, setPhase] = useState('setup');
  const [currentPrompt, setCurrentPrompt] = useState<SprintPrompt | null>(null);
  const [userTranscript, setUserTranscript] = useState('');
  const [textInput, setTextInput] = useState('');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [rounds, setRounds] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [isRecording, setIsRecording] = useState(false);
  const [ttsLoading, setTtsLoading] = useState(false);
  const [ttsError, setTtsError] = useState('');
  const [micDenied, setMicDenied] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState('');

  const recRef = useRef<any>(null);
  const finishFired = useRef(false);
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const transcriptRef = useRef('');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string | null>(null);
  const phaseRef = useRef('setup');
  const mountedRef = useRef(true);

  // Keep phaseRef in sync
  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  // Inject keyframe styles once
  useEffect(() => {
    const id = 'sprint-styles';
    if (!document.getElementById(id)) {
      const style = document.createElement('style');
      style.id = id;
      style.textContent = SPRINT_STYLES;
      document.head.appendChild(style);
    }
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      stopMic();
      if (silenceTimerRef.current !== null) clearTimeout(silenceTimerRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
        audioUrlRef.current = null;
      }
    };
  }, []);

  // ── Countdown phase ─────────────────────────
  useEffect(() => {
    if (phase !== 'countdown') return undefined;
    if (countdown <= 0) {
      const prompt = pickPrompt();
      setCurrentPrompt(prompt);
      setUserTranscript('');
      setLiveTranscript('');
      setTextInput('');
      setMicDenied(false);
      setPhase('speaking');
      startListening();
      return undefined;
    }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, countdown]);

  function stopMic() {
    if (silenceTimerRef.current !== null) clearTimeout(silenceTimerRef.current);
    setIsRecording(false);
    if (recRef.current) {
      try {
        recRef.current.stop();
      } catch {
        /* already stopped */
      }
      recRef.current = null;
    }
  }

  function startListening() {
    transcriptRef.current = '';
    setLiveTranscript('');
    setIsRecording(true);

    if (!SR_SUPPORTED) return;

    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    const rec = new SpeechRec();
    rec.lang = 'hr-HR';
    rec.interimResults = true;
    rec.continuous = true;
    recRef.current = rec;

    const resetSilence = () => {
      if (silenceTimerRef.current !== null) clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = setTimeout(() => {
        const captured = transcriptRef.current.trim();
        if (captured.length > 1 && phaseRef.current === 'speaking') {
          stopMic();
          handleUserDone(captured);
        }
      }, 3000);
    };

    rec.onresult = (e: any) => {
      let full = '';
      for (let i = 0; i < e.results.length; i++) {
        full += e.results[i][0].transcript;
      }
      transcriptRef.current = full;
      setLiveTranscript(full);
      resetSilence();
    };

    rec.onerror = (e: any) => {
      if (e.error === 'not-allowed' || e.error === 'permission-denied') {
        setMicDenied(true);
      }
      setIsRecording(false);
    };

    rec.onend = () => {
      if (phaseRef.current === 'speaking' && transcriptRef.current.trim().length > 1) {
        stopMic();
        handleUserDone(transcriptRef.current.trim());
      } else {
        setIsRecording(false);
      }
    };

    try {
      rec.start();
    } catch {
      /* already started */
    }
  }

  function handleUserDone(transcript: string) {
    const finalText = transcript || textInput || '';
    setUserTranscript(finalText);
    setPhase('model');
    if (currentPrompt) loadTTS(currentPrompt.model_response);
  }

  async function loadTTS(text: string) {
    setTtsLoading(true);
    setTtsError('');
    setAudioUrl(null);
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current);
      audioUrlRef.current = null;
    }
    try {
      const res = await ttsFetch({ text, slow: false, voice: getVoicePreference() });
      if (!res || !res.ok) throw new Error(`TTS ${res?.status ?? 'failed'}`);
      const blob = await res.blob();
      // Use base64 data URL — blob: URLs fail silently on some Android OEM WebViews
      const url = await new Promise<string>((resolve) => {
        const r = new FileReader();
        r.onload = () => resolve(r.result as string);
        r.readAsDataURL(blob);
      });
      // Left the screen during the TTS fetch? The unmount cleanup has already
      // paused audioRef and revoked the object URL, so constructing and playing a
      // new element here left Croatian audio running over the next screen with
      // nothing able to stop it.
      if (!mountedRef.current) return;
      audioUrlRef.current = url;
      setAudioUrl(url);
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.play().catch(() => {});
    } catch {
      setTtsError('Could not load audio. Check your connection and try again.');
    } finally {
      setTtsLoading(false);
    }
  }

  function startRound() {
    stopMic();
    setCountdown(3);
    setPhase('countdown');
  }

  function nextRound() {
    setRounds((r) => r + 1);
    const prompt = pickPrompt();
    setCurrentPrompt(prompt);
    setUserTranscript('');
    setLiveTranscript('');
    setTextInput('');
    setMicDenied(false);
    setTtsError('');
    setAudioUrl(null);
    setPhase('speaking');
    startListening();
  }

  function handleDone() {
    stopMic();
    if (!finishFired.current) {
      finishFired.current = true;
      const totalRounds = rounds + (phase === 'feedback' ? 1 : 0);
      if (award && totalRounds > 0) award(totalRounds * 5, false, 'speaking');
      markQuest('speak');
      if (!stats.vs?.includes('speaking')) {
        setStats((prev) => {
          if (prev.vs?.includes('speaking')) return prev;
          return { ...prev, sp: (prev.sp || 0) + 1, vs: [...(prev.vs || []), 'speaking'] };
        });
        writeDelta({ sp: 1, vs: ['speaking'] });
      } else {
        writeDelta({ sp: 1 });
      }
    }
    goBack();
  }

  const level = getUserLevel();

  // ── Setup phase ──────────────────────────────
  if (phase === 'setup') {
    return (
      <SprintSetupScreen level={level} onStart={startRound} onBack={goBack} isOnline={isOnline} />
    );
  }

  // ── Countdown phase ──────────────────────────
  if (phase === 'countdown') {
    return <SprintCountdownScreen countdown={countdown} />;
  }

  // ── Speaking phase ───────────────────────────
  if (phase === 'speaking' && currentPrompt) {
    return (
      <SprintSpeakingPhase
        rounds={rounds}
        level={level}
        currentPrompt={currentPrompt}
        micDenied={micDenied}
        isRecording={isRecording}
        liveTranscript={liveTranscript}
        textInput={textInput}
        onTextInputChange={setTextInput}
        onStartListening={startListening}
        onDoneSpeaking={() => {
          stopMic();
          handleUserDone(transcriptRef.current || textInput);
        }}
        onSkip={() => {
          stopMic();
          setUserTranscript('');
          setPhase('model');
          loadTTS(currentPrompt.model_response);
        }}
      />
    );
  }

  // ── Model phase (native playback) ────────────
  if (phase === 'model' && currentPrompt) {
    return (
      <SprintModelPhase
        currentPrompt={currentPrompt}
        ttsLoading={ttsLoading}
        ttsError={ttsError}
        audioUrl={audioUrl}
        audioRef={audioRef}
        userTranscript={userTranscript}
        onGetFeedback={() => setPhase('feedback')}
      />
    );
  }

  // ── Feedback phase ───────────────────────────
  if (phase === 'feedback' && currentPrompt) {
    return (
      <SprintFeedbackPhase
        currentPrompt={currentPrompt}
        userTranscript={userTranscript}
        rounds={rounds}
        onNextRound={nextRound}
        onDone={handleDone}
      />
    );
  }

  // Fallback / loading
  return (
    <div
      className="scr-wrap"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}
    >
      <p style={{ color: 'var(--subtext)' }}>Loading…</p>
    </div>
  );
}
