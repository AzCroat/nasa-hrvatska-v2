import { useState } from 'react';
import CroatianGrb from '../shared/CroatianGrb';
import { lsGet, lsSet } from '../../lib/safeStorage';
import CharacterPortrait from '../family/CharacterPortrait';
import type { Stats, AuthUser } from '../../types';

interface WelcomeScreenProps {
  name: string;
  au?: AuthUser | null;
  st: Stats;
  setScr: (screen: string) => void;
  setName: (name: string) => void;
}

const GOALS = [
  {
    id: 'heritage',
    icon: '🇭🇷',
    label: 'My heritage & roots',
    sub: 'Connect with where I came from',
  },
  {
    id: 'family',
    icon: '👨‍👩‍👧',
    label: 'Speak with family',
    sub: 'Talk to parents, grandparents, relatives',
  },
  {
    id: 'elders',
    icon: '👴👵',
    label: 'Za bake i djedove',
    sub: 'Connect with elderly relatives before time runs out',
  },
  {
    id: 'partner',
    icon: '💑',
    label: 'My partner is Croatian',
    sub: 'Navigate family gatherings, impress their parents',
  },
  {
    id: 'travel',
    icon: '✈️',
    label: 'Travel to Croatia',
    sub: 'Navigate, meet locals, feel at home',
  },
  { id: 'culture', icon: '📖', label: 'Love the culture', sub: 'Music, history, food, football' },
  {
    id: 'fluent',
    icon: '🗣️',
    label: 'Become fluent',
    sub: 'Full conversational ability in Croatian',
  },
];

/** Goals whose learner is asked one more, optional question: the heritage region. */
const HERITAGE_GOALS = new Set(['heritage', 'family', 'partner', 'elders']);

export default function WelcomeScreen({ name, au, st, setScr, setName }: WelcomeScreenProps) {
  const [step, setStep] = useState(0); // 0=hero, 1=goal, 2=heritage/family (heritage goals only)
  const [goal, setGoal] = useState('');
  const [selectedGen, setSelectedGen] = useState(lsGet('nh_heritage_gen') || '');

  // ONBOARDING ENDS ON THE COURSE (owner decision, 2026-09-29): name → goal →
  // (heritage region, for heritage goals) → Home, whose Begin Session IS Unit 1,
  // lesson 1. The placement test used to sit here — 15 questions before any
  // teaching — and since the course became one path for everyone its `nh_level`
  // decided nothing about the course, only the Practice tab's content level (a
  // B1 placement meant Unit 1 in the session and B1 flashcards on the tab). "I
  // already know some Croatian" is the course's own test-out, at the same bar.
  // Guarded throughout: a single throwing write (site data blocked / quota full)
  // used to abort the rest and leave a brand-new user stuck on this screen.
  function finishOnboarding() {
    if (!name && au) setName(au.d);
    if (goal) {
      lsSet('nh_goal', goal);
      lsSet('nh_goal_set', '1');
    }
    if (lsGet('nh_heritage_region')) {
      lsSet('nh_heritage_saved', 'true');
    }
    lsSet('onboarded', 'true');
    setScr('dashboard');
  }

  // ── Step 0: Hero ──────────────────────────────────────────────────────────
  if (step === 0)
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: 'clamp(14px, 4vw, 24px)',
          position: 'relative',
          zIndex: 1,
          background: 'linear-gradient(160deg, #060e1e 0%, #0a2348 40%, #0c3868 100%)',
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              'linear-gradient(90deg, transparent, #C8980A 20%, #FFE070 50%, #C8980A 80%, transparent)',
            zIndex: 10,
          }}
        />
        <div style={{ textAlign: 'center', maxWidth: 460, animation: 'rise .6s' }}>
          <StepDots step={0} dark />
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <CroatianGrb
              size={120}
              style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.35))' }}
            />
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 'var(--text-4xl)',
              color: 'white',
              fontWeight: 900,
              marginBottom: 8,
              lineHeight: 1.15,
            }}
          >
            Naša Hrvatska
          </h1>
          <span style={{ display: 'block', textAlign: 'center', margin: '8px auto' }}>
            <CharacterPortrait name="baka" size={110} />
          </span>
          <p
            style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'var(--text-lg)', marginBottom: 8 }}
          >
            Croatian for the diaspora — made with love 🇭🇷
          </p>
          {(name || au?.d) && (
            <p
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: 'var(--text-md)',
                marginBottom: 28,
              }}
            >
              Bog, <span style={{ color: '#FFE070', fontWeight: 700 }}>{name || au?.d}</span>!
            </p>
          )}
          <div
            style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 16,
              padding: '16px 20px',
              marginBottom: 28,
              border: '1px solid rgba(255,255,255,0.15)',
              textAlign: 'left',
            }}
          >
            <div style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
              <span style={{ fontSize: 18 }}>🌍</span>
              <span
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'rgba(255,255,255,0.75)',
                  fontWeight: 600,
                }}
              >
                By diaspora, for diaspora — built by Croatian-Americans who know the struggle
              </span>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <span style={{ fontSize: 18 }}>🇭🇷</span>
              <span
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'rgba(255,255,255,0.75)',
                  fontWeight: 600,
                }}
              >
                Authentic content — real songs, real stories, real Croatian (not tourist phrases)
              </span>
            </div>
          </div>
          <button
            className="b bp"
            style={{
              fontSize: 'var(--text-lg)',
              padding: '14px 48px',
              width: '100%',
              marginBottom: 12,
            }}
            onClick={() => setStep(1)}
          >
            <span style={{ display: 'block', fontWeight: 900 }}>Počnimo!</span>
            <span
              style={{
                display: 'block',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                opacity: 0.85,
                marginTop: 2,
              }}
            >
              Let's begin →
            </span>
          </button>
          {!!au && (
            <button
              className="b bg"
              style={{ fontSize: 'var(--text-sm)', padding: '13px 24px', width: '100%' }}
              onClick={() => setScr('dashboard')}
            >
              Already signed in? Continue →
            </button>
          )}
        </div>
      </div>
    );

  // ── Step 1: Why are you learning? ─────────────────────────────────────────
  if (step === 1)
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: 'clamp(14px, 4vw, 24px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: 460, width: '100%', animation: 'rise .4s' }}>
          <StepDots step={1} />
          <span style={{ display: 'block', textAlign: 'center', margin: '0 auto 8px' }}>
            <CharacterPortrait name="baka" size={72} />
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 26,
              color: 'var(--heading)',
              fontWeight: 900,
              marginBottom: 6,
              textAlign: 'center',
            }}
          >
            What's your story?
          </h2>
          <p
            style={{
              color: 'var(--subtext)',
              fontSize: 'var(--text-base)',
              textAlign: 'center',
              marginBottom: 24,
            }}
          >
            This personalizes your AI practice and recommendations — the full course is always
            yours.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
            {GOALS.map((g) => (
              <button
                key={g.id}
                onClick={() => setGoal(g.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '14px 18px',
                  borderRadius: 14,
                  border: goal === g.id ? '2px solid var(--info)' : '2px solid var(--card-b)',
                  background: goal === g.id ? 'rgba(14,116,144,.1)' : 'var(--card)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all .18s',
                  fontFamily: "'Outfit',sans-serif",
                  transform: goal === g.id ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: goal === g.id ? '0 0 0 3px rgba(14,116,144,0.5)' : 'none',
                }}
              >
                <span
                  style={{
                    fontSize: 22,
                    flexShrink: 0,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: goal === g.id ? 'rgba(14,116,144,.15)' : 'transparent',
                    transition: 'background .18s',
                  }}
                >
                  {g.icon}
                </span>
                <div>
                  <div
                    style={{
                      fontSize: 'var(--text-md)',
                      fontWeight: 800,
                      color: 'var(--heading)',
                      marginBottom: 2,
                    }}
                  >
                    {g.label}
                  </div>
                  <div
                    style={{ fontSize: 'var(--text-sm)', color: 'var(--subtext)', fontWeight: 500 }}
                  >
                    {g.sub}
                  </div>
                </div>
                {goal === g.id && (
                  <span style={{ marginLeft: 'auto', color: 'var(--info)', fontSize: 18 }}>✓</span>
                )}
              </button>
            ))}
          </div>
          {!goal && (
            <p
              style={{
                fontSize: 12,
                color: 'var(--subtext)',
                textAlign: 'center',
                marginBottom: 8,
                opacity: 0.8,
              }}
            >
              👆 Choose your goal above to continue
            </p>
          )}
          <button
            className="b bp"
            style={{
              fontSize: 'var(--text-lg)',
              padding: '14px',
              width: '100%',
              opacity: goal ? 1 : 0.5,
            }}
            disabled={!goal}
            onClick={() => (HERITAGE_GOALS.has(goal) ? setStep(2) : finishOnboarding())}
          >
            Continue →
          </button>
        </div>
      </div>
    );

  // ── Step 2: Heritage Profile (heritage/family goal only) ─────────────────
  if (step === 2)
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: 'clamp(14px, 4vw, 24px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: 460, width: '100%', animation: 'rise .4s' }}>
          <StepDots step={2} />
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 24,
              color: 'var(--heading)',
              fontWeight: 900,
              marginBottom: 6,
              textAlign: 'center',
            }}
          >
            {goal === 'partner'
              ? 'Tell us about your partner 💑'
              : goal === 'elders'
                ? 'Tell us about your family 👴👵'
                : 'Tell us about your roots 🇭🇷'}
          </h2>
          <p
            style={{
              color: 'var(--subtext)',
              fontSize: 'var(--text-sm)',
              textAlign: 'center',
              marginBottom: 24,
            }}
          >
            {goal === 'partner'
              ? "We'll teach you the words that matter most at family gatherings"
              : goal === 'elders'
                ? "Every conversation is precious — we'll focus on what matters most right now"
                : 'This helps us personalize your content (totally optional)'}
          </p>

          <div style={{ marginBottom: 16 }}>
            <label
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 700,
                color: 'var(--heading)',
                display: 'block',
                marginBottom: 6,
              }}
            >
              {goal === 'partner' ? 'Where is your partner from?' : 'Where is your family from?'}
            </label>
            <select
              onChange={(e) => lsSet('nh_heritage_region', e.target.value)}
              defaultValue={lsGet('nh_heritage_region') || ''}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: 12,
                border: '1.5px solid var(--card-b)',
                background: 'var(--card)',
                color: 'var(--heading)',
                fontSize: 'var(--text-base)',
                fontFamily: "'Outfit',sans-serif",
              }}
            >
              <option value="">Choose a region...</option>
              <option value="dalmatia">Dalmatia (Split, Dubrovnik, islands)</option>
              <option value="zagreb">Zagreb &amp; surroundings</option>
              <option value="istria">Istria &amp; Kvarner</option>
              <option value="slavonia">Slavonia &amp; Baranja</option>
              <option value="hercegovina">Herzegovina &amp; Bosanska Hrvatska</option>
              <option value="lika">Lika &amp; Gorski Kotar</option>
              <option value="other">Other / Not sure</option>
            </select>
          </div>

          <div style={{ marginBottom: 24 }}>
            <label
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 700,
                color: 'var(--heading)',
                display: 'block',
                marginBottom: 6,
              }}
            >
              {goal === 'partner'
                ? 'Tell us about your partner'
                : goal === 'elders'
                  ? 'Who are you hoping to connect with?'
                  : 'Your generation'}
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {(goal === 'partner'
                ? [
                    {
                      id: 'partner_native',
                      label: 'My partner is Croatian-born 🇭🇷',
                      sub: 'Born or raised in Croatia',
                    },
                    {
                      id: 'partner_heritage',
                      label: "My partner's parents are Croatian 🌍",
                      sub: '2nd generation diaspora',
                    },
                    {
                      id: 'partner_extended',
                      label: 'My partner has Croatian family ties 👨‍👩‍👧',
                      sub: 'Extended Croatian family',
                    },
                  ]
                : goal === 'elders'
                  ? [
                      {
                        id: 'elders_baka',
                        label: 'Baka i djed 👴👵',
                        sub: 'Grandparents — I want them to hear me speak Croatian',
                      },
                      {
                        id: 'elders_gathering',
                        label: 'Family gatherings 👨‍👩‍👧',
                        sub: 'Weddings, funerals, reunions — I want to be present',
                      },
                      {
                        id: 'elders_aging',
                        label: "Before it's too late ❤️",
                        sub: "Reconnecting while there's still time",
                      },
                      {
                        id: 'elders_general',
                        label: 'Older relatives generally 🏡',
                        sub: 'Aunts, uncles, distant family abroad',
                      },
                    ]
                  : [
                      { id: 'first', label: "I'm from Croatia", sub: 'Born or raised there' },
                      {
                        id: 'second',
                        label: 'My parents are Croatian',
                        sub: '2nd generation diaspora',
                      },
                      {
                        id: 'third',
                        label: 'My grandparents are Croatian',
                        sub: '3rd generation diaspora',
                      },
                      {
                        id: 'fourth',
                        label: 'Great-grandparents or further',
                        sub: '4th+ generation',
                      },
                    ]
              ).map((g) => {
                const sel = selectedGen === g.id;
                return (
                  <button
                    key={g.id}
                    onClick={() => {
                      lsSet('nh_heritage_gen', g.id);
                      setSelectedGen(g.id);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '12px 16px',
                      borderRadius: 12,
                      border: sel ? '2px solid var(--info)' : '2px solid var(--card-b)',
                      background: sel ? 'rgba(14,116,144,.1)' : 'var(--card)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: "'Outfit',sans-serif",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 'var(--text-base)',
                          fontWeight: 700,
                          color: 'var(--heading)',
                        }}
                      >
                        {g.label}
                      </div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--subtext)' }}>
                        {g.sub}
                      </div>
                    </div>
                    {sel && <span style={{ marginLeft: 'auto', color: 'var(--info)' }}>✓</span>}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            className="b bp"
            style={{ fontSize: 'var(--text-md)', padding: '14px', width: '100%', marginBottom: 10 }}
            onClick={() => finishOnboarding()}
          >
            Start learning →
          </button>
          <button
            onClick={() => finishOnboarding()}
            style={{
              background: 'none',
              border: '1px solid var(--card-b)',
              borderRadius: 10,
              padding: '12px 20px',
              color: 'var(--subtext)',
              fontSize: 'var(--text-sm)',
              cursor: 'pointer',
              marginTop: 8,
              width: '100%',
              fontFamily: 'inherit',
            }}
          >
            Skip this step
          </button>
        </div>
      </div>
    );

  return null;
}

// 3-step indicator — dots fill left to right as user advances
function StepDots({ step, dark = false }: { step: number; dark?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 24 }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: i === step ? 22 : 8,
            height: 8,
            borderRadius: 4,
            background:
              i <= step
                ? dark
                  ? '#C8980A'
                  : 'var(--info)'
                : dark
                  ? 'rgba(255,255,255,0.2)'
                  : 'var(--bar-bg,#e2e8f0)',
            transition: 'all .25s',
          }}
        />
      ))}
    </div>
  );
}
