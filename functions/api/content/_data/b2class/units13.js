// ─── B2 lessons in class order — Unit 13 (lessons 61–65) ─────────────────────
// Same shape and rules as the A1, A2 and B1 class files (a1class/, a2class/, b1class/):
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what A1, A2, B1 and B2 have taught. Vi / Vas / Vam / Vaš take a capital
// whenever ONE person is addressed politely in writing; the plural vi for several
// people (the tenants of a building, the audience of a talk) is written small.
// A register mismatch counts as an "error" only where the question names the
// register that is wanted. Existing typed items whose answer is a small word
// (sve, Vas, da) open their mix, so that nothing printed earlier gives it away.

export const CLASS_B2_U13 = {
  // ── Abstract topics ────────────────────────────────────────────────────────
  'abstract-topics': {
    text: {
      kind: 'dialogue',
      title: 'Kamere u centru grada',
      lines: [
        {
          who: 'Lana',
          hr: 'Viktore, što misliš o novim kamerama u centru grada? Ja smatram da je to opasno za našu slobodu.',
          en: 'Viktor, what do you think of the new cameras downtown? I consider that dangerous for our freedom.',
        },
        {
          who: 'Viktor',
          hr: 'Ne bih rekao. Pretpostavljam da će ulice biti sigurnije, a sigurnost je ipak na prvom mjestu.',
          en: 'I wouldn’t say so. I assume the streets will be safer, and safety does come first after all.',
        },
        {
          who: 'Lana',
          hr: 'To tvrdi i gradonačelnik, ali nitko još nije dokazao da kamere smanjuju broj krađa.',
          en: 'That is what the mayor claims too, but nobody has yet proved that cameras reduce the number of thefts.',
        },
        {
          who: 'Viktor',
          hr: 'Slažem se da dokaza nema mnogo. Ipak, treba razlikovati nadzor od zlouporabe — sve ovisi o tome tko gleda snimke.',
          en: 'I agree that there is not much evidence. Still, one should distinguish surveillance from abuse — everything depends on who watches the recordings.',
        },
        {
          who: 'Lana',
          hr: 'Upravo tako! Odgovornost je na gradu, a zakon se mora odnositi na sve, pa i na one koji nas snimaju.',
          en: 'Exactly! The responsibility lies with the city, and the law must apply to everyone, including those who film us.',
        },
        {
          who: 'Viktor',
          hr: 'Dakle, ti kamere ne smatraš lošima, nego opasnima bez jasnih pravila?',
          en: 'So you don’t consider the cameras bad, but dangerous without clear rules?',
        },
        {
          who: 'Lana',
          hr: 'Točno. Mogućnost zlouporabe uvijek postoji, a privatnost smatram jednako važnom kao i sigurnost.',
          en: 'Right. The possibility of abuse always exists, and I consider privacy just as important as safety.',
        },
        {
          who: 'Viktor',
          hr: 'Onda možemo zaključiti da se zapravo slažemo: problem nisu kamere, nego povjerenje.',
          en: 'Then we can conclude that we actually agree: the problem is not the cameras, but trust.',
        },
        {
          who: 'Lana',
          hr: 'A povjerenje ovisi o iskustvu. Vidjet ćemo za godinu dana.',
          en: 'And trust depends on experience. We will see in a year.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what do Lana and Viktor finally agree on?',
          options: [
            'That the cameras should be taken down at once',
            'That safety matters more than freedom',
            'That the mayor has proved the cameras work',
            'That the real problem is not the cameras but trust',
          ],
          correct: 3,
          hint: 'Viktor draws the conclusion near the end, and Lana does not contradict him — she only adds what that last thing depends on.',
          explanation:
            'Možemo zaključiti da se zapravo slažemo: problem nisu kamere, nego povjerenje. Neither gives up freedom or safety; both want clear rules for whoever watches.',
        },
        {
          q: 'Lana says "privatnost smatram jednako važnom". Why "važnom", and not "važna" or "važnu"?',
          options: [
            'Because privatnost is the subject of the sentence',
            'Because "jednako" is always followed by the instrumental',
            'Because with smatrati the thing is in the accusative and the quality you give it goes into the instrumental',
            'Because the sentence is about a place, so it needs the locative',
          ],
          correct: 2,
          hint: 'There are two shapes: smatram da je… with a clause, and a compact one with no da at all. Which case carries the quality in the compact one?',
          explanation:
            'smatrati + accusative + instrumental: privatnost (accusative — an i-noun does not change there) and the quality in the feminine instrumental, važnom. With a clause it would be: smatram da je privatnost važna.',
        },
        {
          type: 'type',
          q: 'Now you. Lana insists that nobody stands above the law: Zakon se mora odnositi i na ____. (gradonačelnik)',
          answer: 'gradonačelnika',
          hint: 'This verb carries na + the accusative — and the mayor is a living person, so the masculine accusative is not the same as the nominative.',
          explanation:
            'odnositi se na + accusative: na gradonačelnika. For a masculine noun that names a person, the accusative has the ending of the genitive, -a.',
        },
        {
          type: 'transform',
          q: 'Say the same thing in the compact, more formal shape — no "da", no "je".',
          from: 'Smatram da je taj prijedlog opasan.',
          answer: 'Smatram taj prijedlog opasnim.',
          accept: ['Taj prijedlog smatram opasnim.', 'Ja smatram taj prijedlog opasnim.'],
          hint: 'The thing stays in the accusative right after the verb; only the quality changes its case.',
          explanation:
            'Smatram taj prijedlog opasnim. — the thing in the accusative (taj prijedlog), the quality in the masculine instrumental (-im).',
        },
        {
          type: 'type',
          q: 'Now you. Viktor wants the streets to be safe; Lana wants people to be equal (jednak) as well. Name the quality: ____ pred zakonom nije samo riječ.',
          answer: 'Jednakost',
          hint: 'Take the adjective and add the suffix that turns most adjectives into the quality they name.',
          explanation:
            'jednak + -ost → jednakost. Every noun built this way is feminine and declines like stvar: jednakost, jednakosti.',
        },
      ],
    },
    mix: [
      5,
      {
        type: 'match',
        q: 'Match each abstract noun to what it means in everyday life.',
        pairs: [
          ['pravda', 'what a court is supposed to deliver'],
          ['jednakost', 'the same rights for everybody'],
          ['sloboda', 'nobody forbids you to say what you think'],
          ['sigurnost', 'being out of danger'],
          ['moć', 'what a person who decides for others has'],
        ],
        explanation:
          'pravda is justice, jednakost equality, sloboda freedom, sigurnost safety and moć power. Two of the five are built from adjectives with -ost: jednak → jednakost, siguran → sigurnost.',
      },
      4,
      7,
      {
        type: 'sort',
        q: 'What is the speaker doing — giving an opinion, guessing, or drawing a conclusion?',
        groups: ['Gives an opinion', 'Guesses without proof', 'Draws a conclusion'],
        items: [
          { hr: 'Smatram da je to nepravedno.', group: 0 },
          { hr: 'Pretpostavljam da će kasniti.', group: 1 },
          { hr: 'Iz toga zaključujem da nemamo izbora.', group: 2 },
          { hr: 'Po mom mišljenju, zakon je dobar.', group: 0 },
          { hr: 'Vjerojatno su već otišli, ali ne znam.', group: 1 },
          { hr: 'Dakle, problem je širi nego što smo mislili.', group: 2 },
        ],
        explanation:
          'smatrati and po mom mišljenju state a view; pretpostavljati and vjerojatno mark a guess; zaključivati and dakle show that the sentence follows from what was said before.',
      },
      0,
      6,
      {
        type: 'transform',
        q: 'Say the same thing in the compact, more formal shape — without "da".',
        from: 'Smatram da je ta odluka pogrešna.',
        answer: 'Smatram tu odluku pogrešnom.',
        accept: ['Tu odluku smatram pogrešnom.', 'Ja smatram tu odluku pogrešnom.'],
        hint: 'Two words change their case: the decision becomes the object of the verb, and the quality goes into the instrumental.',
        explanation:
          'Smatram tu odluku pogrešnom. — smatrati + accusative (tu odluku) + instrumental (pogrešnom).',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Roditelji', 'imaju', 'velik', 'odgovornost', 'prema', 'djeci.'],
        wrong: 2,
        answer: 'veliku',
        hint: 'The noun ends in a consonant, but what gender is every noun built with this suffix?',
        explanation:
          'Roditelji imaju veliku odgovornost prema djeci. — nouns in -ost are feminine, so the adjective is feminine too, and here it is in the accusative as the object of imaju.',
      },
      3,
      {
        type: 'tf',
        q: 'Tko nešto tvrdi, time pokazuje da nije siguran u to.',
        answer: false,
        hint: 'One verb of this lesson is for saying something firmly, another for guessing. Which is this one?',
        explanation:
          'False. tvrditi means to claim, to assert — the speaker presents it as true. The verb for an unproven guess is pretpostaviti.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "Many consider freedom more important than safety."',
        words: ['Mnogi', 'smatraju', 'slobodu', 'važnijom', 'od', 'sigurnosti.'],
        accept: [
          'Mnogi slobodu smatraju važnijom od sigurnosti.',
          'Slobodu mnogi smatraju važnijom od sigurnosti.',
          'Mnogi smatraju slobodu od sigurnosti važnijom.',
          'Slobodu smatraju mnogi važnijom od sigurnosti.',
          'Slobodu važnijom od sigurnosti smatraju mnogi.',
        ],
        explanation:
          'Mnogi smatraju slobodu važnijom od sigurnosti. — smatrati + accusative (slobodu) + instrumental (važnijom); after a comparative, od takes the genitive (sigurnosti).',
      },
      10,
      {
        type: 'listen',
        audio: 'Ne tvrdim da je zakon loš, samo smatram da se ne odnosi jednako na sve građane.',
        q: 'What is the speaker’s view of the law?',
        options: [
          'The law is bad and should be abolished',
          'The law is not necessarily bad, but it does not apply to all citizens equally',
          'The law applies to everyone equally, so it is fair',
          'The speaker has no opinion about the law',
        ],
        correct: 1,
        explanation:
          'Ne tvrdim da je zakon loš — the speaker does not claim it is bad. samo smatram da se ne odnosi jednako na sve građane — the objection is that it does not apply equally to everyone.',
      },
      {
        type: 'dictate',
        audio: 'Istina ne ovisi o mišljenju većine.',
        answer: 'Istina ne ovisi o mišljenju većine.',
        hint: 'Six words: "The truth does not depend on the opinion of the majority."',
        explanation:
          'Istina ne ovisi o mišljenju većine. — ovisiti o + locative (o mišljenju), and then whose opinion, in the genitive (većine).',
      },
    ],
  },

  // ── Formal e-mail ──────────────────────────────────────────────────────────
  'formal-email': {
    text: {
      kind: 'text',
      title: 'Upit o ljetnom tečaju',
      lines: [
        {
          hr: 'Predmet: Upit o ljetnom tečaju hrvatskog jezika',
          en: 'Subject: Inquiry about the summer Croatian language course',
        },
        { hr: 'Poštovana gospođo Kovač,', en: 'Dear Mrs. Kovač,' },
        {
          hr: 'obraćam Vam se u vezi s ljetnim tečajem hrvatskog jezika koji je objavljen na Vašoj mrežnoj stranici.',
          en: 'I am contacting you regarding the summer Croatian language course that is announced on your website.',
        },
        {
          hr: 'Zovem se Daniel Baker, dolazim iz Chicaga i hrvatski učim tri godine, a lani sam položio ispit na razini B1.',
          en: 'My name is Daniel Baker, I come from Chicago and I have been learning Croatian for three years, and last year I passed the exam at level B1.',
        },
        {
          hr: 'Zanima me ima li još slobodnih mjesta u grupi B2 i do kada se mogu prijaviti.',
          en: 'I would like to know whether there are still places available in the B2 group and by when I can register.',
        },
        {
          hr: 'Molim Vas i za informaciju o smještaju: bio bih Vam zahvalan ako biste mi mogli preporučiti studentski dom u blizini fakulteta.',
          en: 'I would also ask you for information about accommodation: I would be grateful if you could recommend a dormitory near the university.',
        },
        {
          hr: 'U prilogu Vam šaljem svoj životopis i potvrdu o položenom ispitu.',
          en: 'Attached I am sending you my résumé and the certificate of the exam I passed.',
        },
        {
          hr: 'Stojim Vam na raspolaganju za sva dodatna pitanja i unaprijed zahvaljujem na odgovoru.',
          en: 'I remain at your disposal for any further questions and thank you in advance for your reply.',
        },
        { hr: 'S poštovanjem,', en: 'Sincerely,' },
        { hr: 'Daniel Baker', en: 'Daniel Baker' },
      ],
      questions: [
        {
          q: 'Without looking back at the e-mail: which two documents does Daniel attach?',
          options: [
            'His résumé and the certificate of the exam he passed',
            'A copy of his passport and a photo',
            'The registration form and proof of payment',
            'A letter of recommendation and his résumé',
          ],
          correct: 0,
          hint: 'One document tells who he is and what he has done; the other proves his level.',
          explanation:
            'U prilogu Vam šaljem svoj životopis i potvrdu o položenom ispitu. — his résumé and the certificate of the B1 exam.',
        },
        {
          q: 'In the opening "Poštovana gospođo Kovač," one noun has changed its ending and one has not. Why?',
          options: [
            'Both are in the nominative; "gospođo" is simply an older spelling',
            'Kovač is a foreign surname, and foreign surnames never change',
            '"gospođo" is the instrumental after Poštovana, and Kovač is the nominative',
            'She is being addressed, so gospođa is in the vocative — and a woman’s surname that ends in a consonant does not decline',
          ],
          correct: 3,
          hint: 'Which case do you use to call somebody or to address them directly? And think of how you would say "I saw Mrs. Kovač".',
          explanation:
            'A greeting addresses the person, so gospođa takes the vocative: gospođo. A woman’s surname ending in a consonant stays as it is in every case: gospođo Kovač, s gospođom Kovač.',
        },
        {
          type: 'type',
          q: 'Now you. Daniel writes again, this time only about the dormitory: Obraćam Vam se u vezi sa ____ u studentskom domu. (smještaj)',
          answer: 'smještajem',
          hint: 'u vezi s takes the same case as s on its own — the one for "with".',
          explanation:
            'u vezi sa smještajem — s + the instrumental. The preposition becomes sa here because the next word begins with s.',
        },
        {
          type: 'transform',
          q: 'Daniel would write this to a friend. Rewrite it for Mrs. Kovač, whom he has never met.',
          from: 'Možeš li mi poslati raspored?',
          answer: 'Možete li mi poslati raspored?',
          accept: [
            'Biste li mi mogli poslati raspored?',
            'Možete li mi, molim Vas, poslati raspored?',
            'Molim Vas, možete li mi poslati raspored?',
            'Možete li mi poslati raspored, molim Vas?',
            'Molim Vas da mi pošaljete raspored.',
            'Molim Vas, pošaljite mi raspored.',
            'Pošaljite mi, molim Vas, raspored.',
            'Možete li mi Vi poslati raspored?',
            'Mogli biste mi poslati raspored?',
            'Biste li mi, molim Vas, mogli poslati raspored?',
            'Molim Vas, biste li mi mogli poslati raspored?',
          ],
          hint: 'The verb moves from the form for ti to the form for Vi. The conditional of the same verb would be more polite still.',
          explanation:
            'Možete li mi poslati raspored? — the Vi-form, kept from the first word of a formal e-mail to the last. Biste li mi mogli…? and Molim Vas da mi pošaljete… are more polite ways to say the same.',
        },
        {
          type: 'type',
          q: 'Now you. Mrs. Kovač finds Daniel a room, and he thanks her: Zahvaljujem Vam na ____. (pomoć)',
          answer: 'pomoći',
          hint: 'Thanking for something takes na + the locative — and this feminine noun ends in a consonant, like noć.',
          explanation:
            'zahvaljivati na + locative: na pomoći. pomoć is an i-declension noun, so its locative ends in -i.',
        },
      ],
    },
    mix: [
      5,
      4,
      {
        type: 'match',
        q: 'What does each line of a formal e-mail do? Match it to its job.',
        pairs: [
          ['Poštovani svi,', 'opening an e-mail to a whole group'],
          ['U prilogu šaljem račun.', 'pointing to an attached file'],
          ['Unaprijed zahvaljujem.', 'thanking before the favor is done'],
          ['S poštovanjem,', 'closing a letter to an institution'],
        ],
        explanation:
          'Poštovani svi opens a message to several people, u prilogu points to the attachment, unaprijed means in advance, and S poštovanjem is the most formal close.',
      },
      7,
      {
        type: 'sort',
        q: 'Where does each line belong — in a formal e-mail to an institution, or in a message to a friend?',
        groups: ['Formal e-mail to an institution', 'Message to a friend'],
        items: [
          { hr: 'Molim Vas da mi potvrdite termin.', group: 0 },
          { hr: 'Javi mi kad stigneš.', group: 1 },
          { hr: 'Javljam Vam se u vezi s računom.', group: 0 },
          { hr: 'Hvala ti puno, čujemo se!', group: 1 },
          { hr: 'Molim Vas za informaciju o cijeni.', group: 0 },
          { hr: 'Bog, Ivana, jesi li dobila moju poruku?', group: 1 },
        ],
        explanation:
          'The formal lines use the polite pronoun with a capital and the verb form that goes with it (potvrdite). The friendly lines use ti-forms (javi, stigneš, ti) and the greeting Bog.',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Unaprijed', 'hvala', 'na', 'razumijevanje.'],
        wrong: 3,
        answer: 'razumijevanju',
        hint: 'Thanking for something: na is followed by the case of place here, not the case of direction.',
        explanation:
          'Unaprijed hvala na razumijevanju. — hvala na and zahvaljujem na take the locative: na razumijevanju, na odgovoru.',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "Attached I am sending you my résumé and a recommendation."',
        words: ['U', 'prilogu', 'Vam', 'šaljem', 'životopis', 'i', 'preporuku.'],
        accept: [
          'U prilogu Vam šaljem preporuku i životopis.',
          'Šaljem Vam u prilogu životopis i preporuku.',
          'Šaljem Vam u prilogu preporuku i životopis.',
          'Šaljem Vam životopis i preporuku u prilogu.',
          'Šaljem Vam preporuku i životopis u prilogu.',
          'Životopis i preporuku šaljem Vam u prilogu.',
          'U prilogu šaljem Vam životopis i preporuku.',
          'Životopis i preporuku Vam šaljem u prilogu.',
          'Preporuku i životopis Vam šaljem u prilogu.',
          'Preporuku i životopis šaljem Vam u prilogu.',
          'U prilogu šaljem Vam preporuku i životopis.',
        ],
        explanation:
          'U prilogu Vam šaljem životopis i preporuku. — the short pronoun Vam takes second position, straight after the opening phrase u prilogu.',
      },
      {
        type: 'transform',
        q: 'This was written to a friend. Rewrite it for a formal e-mail to one person you have never met — and use the formal verb of thanking instead of "hvala".',
        from: 'Hvala ti na brzom odgovoru.',
        answer: 'Zahvaljujem Vam na brzom odgovoru.',
        accept: [
          'Zahvaljujem na brzom odgovoru.',
          'Na brzom odgovoru Vam zahvaljujem.',
          'Zahvaljujem Vam na Vašem brzom odgovoru.',
          'Zahvaljujem na Vašem brzom odgovoru.',
        ],
        hint: 'The pronoun stays in the dative but becomes the polite one, with a capital; the verb is the first person of zahvaljivati.',
        explanation:
          'Zahvaljujem Vam na brzom odgovoru. — zahvaljivati takes the person in the dative (Vam) and the thing after na in the locative.',
      },
      {
        type: 'tf',
        q: 'Završni pozdrav „Lijep pozdrav” prikladan je samo u porukama bliskim prijateljima.',
        answer: false,
        hint: 'Think of how most everyday professional e-mails in Croatia end.',
        explanation:
          'False. Lijep pozdrav is the usual close of ordinary professional e-mail — courteous without being stiff. S poštovanjem is one step more formal; to a close friend you would write something like Pozdrav or Vidimo se.',
      },
      3,
      9,
      {
        type: 'listen',
        audio:
          'Poštovana gospođo Kovač, nažalost ne mogu doći na razgovor u utorak pa Vas molim za novi termin.',
        q: 'What is the writer asking for?',
        options: [
          'Directions to the office',
          'A confirmation of the interview on Tuesday',
          'A new date for the interview',
          'More time to send the résumé',
        ],
        correct: 2,
        explanation:
          'ne mogu doći na razgovor u utorak — the writer cannot come on Tuesday; Vas molim za novi termin — and asks for a new date.',
      },
      {
        type: 'dictate',
        audio: 'Molim Vas za odgovor do petka.',
        answer: 'Molim Vas za odgovor do petka.',
        hint: 'Six words: "I ask you for a reply by Friday."',
        explanation:
          'Molim Vas za odgovor do petka. — moliti za + accusative (za odgovor), and do + genitive for the deadline (do petka).',
      },
    ],
  },

  // ── Writing registers ──────────────────────────────────────────────────────
  'writing-registers': {
    text: {
      kind: 'text',
      title: 'Jedna vijest, dva stila',
      lines: [
        {
          who: 'Iva piše Maji',
          hr: 'Bog, Majo! Jesi čula? Sutra nam opet popravljaju lift.',
          en: 'Hi, Maja! Did you hear? They are fixing our elevator again tomorrow.',
        },
        {
          who: 'Iva piše Maji',
          hr: 'Znači, od osam do četiri idemo pješice, a mi smo na šestom katu. Užas!',
          en: 'So from eight to four we are walking, and we are on the sixth floor. Awful!',
        },
        {
          who: 'Iva piše Maji',
          hr: 'Osim toga, isključit će i struju na stubištu, pa ponesi mobitel da nešto vidiš.',
          en: 'Besides, they are going to turn off the power in the stairwell too, so bring your cell phone so that you can see something.',
        },
        {
          who: 'Iva piše Maji',
          hr: 'Ne ljutim se previše — lift je stvarno star. Samo, mogli su nam to javiti ranije, a ne dan prije!',
          en: 'I am not too angry — the elevator really is old. It’s just that they could have told us earlier, not the day before!',
        },
        { who: 'Obavijest', hr: 'Poštovani stanari,', en: 'Dear tenants,' },
        {
          who: 'Obavijest',
          hr: 'ovim putem obavještavamo vas da će se u srijedu od 8 do 16 sati obavljati popravak dizala.',
          en: 'we hereby inform you that on Wednesday from 8 a.m. to 4 p.m. the elevator will be under repair.',
        },
        {
          who: 'Obavijest',
          hr: 'Tijekom radova dizalo neće biti u uporabi. Osim toga, na stubištu će biti isključena rasvjeta.',
          en: 'During the work the elevator will not be in use. In addition, the lighting in the stairwell will be switched off.',
        },
        {
          who: 'Obavijest',
          hr: 'Radovi su nužni; naime, dizalo je ugrađeno prije četrdeset godina i više ne zadovoljava sigurnosne propise.',
          en: 'The work is necessary; the elevator was in fact installed forty years ago and no longer meets the safety regulations.',
        },
        {
          who: 'Obavijest',
          hr: 'Svjesni smo da ova obavijest stiže kasno pa starijim stanarima nudimo pomoć pri nošenju stvari.',
          en: 'We are aware that this notice comes late, so we are offering older tenants help with carrying their things.',
        },
        {
          who: 'Obavijest',
          hr: 'Zahvaljujemo na razumijevanju. Upravitelj zgrade',
          en: 'Thank you for your understanding. The building manager',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the two texts: what is Iva actually annoyed about?',
          options: [
            'That the elevator is being repaired at all',
            'That she has to pay for the repair',
            'That the tenants were told only one day in advance',
            'That nobody will help her carry her things',
          ],
          correct: 2,
          hint: 'She admits the elevator is old. Her complaint starts with "Samo…".',
          explanation:
            'Mogli su nam to javiti ranije, a ne dan prije! — she accepts the repair; what bothers her is the late notice. The manager admits the same thing in his own style: ova obavijest stiže kasno.',
        },
        {
          q: 'Iva writes "popravljaju lift". The notice says "će se obavljati popravak dizala". What has the official register changed?',
          options: [
            'Only the word order',
            'It names nobody who does the work (verb + se), turns the action into a noun, and uses the standard word for the elevator',
            'It moves the sentence into the past tense',
            'It speaks to each tenant with ti',
          ],
          correct: 1,
          hint: 'Compare three things: who does the fixing, whether "to fix" is still a verb, and what the machine is called.',
          explanation:
            'In Iva’s sentence an unnamed "they" fix the elevator. The notice has no doer at all (obavljati se), the verb popravljati has become the noun popravak, and the everyday lift is the standard dizalo.',
        },
        {
          type: 'transform',
          q: 'Iva would say it like this. Write it as the notice would: nobody is named, and the entrance becomes the subject.',
          from: 'Zatvorit će ulaz u garažu.',
          answer: 'Ulaz u garažu bit će zatvoren.',
          accept: [
            'Ulaz u garažu će biti zatvoren.',
            'Bit će zatvoren ulaz u garažu.',
            'Zatvorit će se ulaz u garažu.',
            'Ulaz u garažu zatvorit će se.',
            'Ulaz u garažu će se zatvoriti.',
            'Ulaz će u garažu biti zatvoren.',
          ],
          hint: 'The future of biti plus the participle of the verb — and the participle agrees with a masculine noun.',
          explanation:
            'Ulaz u garažu bit će zatvoren. — biti + the passive participle, masculine to agree with ulaz. The passive with se (Zatvorit će se ulaz u garažu) names nobody either.',
        },
        {
          type: 'type',
          q: 'Now you. The notice explains a reason with "naime". Add a RESULT in the same official style: Dizalo ne radi; ____ molimo stanare da se koriste stubištem.',
          answer: 'stoga',
          accept: ['zato', 'zbog toga', 'dakle'],
          hint: 'You need the formal written word for "therefore" — the second half follows from the first.',
          explanation:
            'stoga introduces a result: the elevator is not working, therefore the tenants are asked to use the stairs. naime would do the opposite and explain the first half.',
        },
        {
          type: 'type',
          q: 'Now you. Official style turns the verb into a noun, as in popravljati → popravak. Do the same with a noun in -nje: U petak se obavlja ____ stubišta. (čistiti)',
          answer: 'čišćenje',
          hint: 'The suffix is -enje, and the st of the stem softens in front of it, as it does in the participle of the same verb.',
          explanation:
            'čistiti → čišćenje: st softens to šć before -enje (compare očišćen). The thing that is cleaned follows in the genitive: čišćenje stubišta.',
        },
      ],
    },
    mix: [
      6,
      7,
      {
        type: 'sort',
        q: 'How is each sentence built? Look at who does the action.',
        groups: [
          'Somebody does it (active)',
          'Nobody is named — verb + se',
          'Nobody is named — biti + participle',
        ],
        items: [
          { hr: 'Vlada je izmijenila zakon.', group: 0 },
          { hr: 'Kuća se gradi.', group: 1 },
          { hr: 'Rezultati su objavljeni.', group: 2 },
          { hr: 'Objavili su rezultate.', group: 0 },
          { hr: 'Sastanak se odgađa.', group: 1 },
          { hr: 'Izvještaj je napisan.', group: 2 },
        ],
        explanation:
          'In the active sentences somebody acts (vlada, or an unnamed "they"). With se the thing simply "happens" (se gradi, se odgađa). biti + participle shows the finished result, and the participle agrees with the subject: rezultati su objavljeni, izvještaj je napisan.',
      },
      5,
      {
        type: 'transform',
        q: 'Turn this spoken sentence into an official notice: nobody is named, and the lecture becomes the subject.',
        from: 'Otkazali su predavanje.',
        answer: 'Predavanje je otkazano.',
        accept: ['Predavanje se otkazuje.', 'Otkazano je predavanje.', 'Otkazuje se predavanje.'],
        hint: 'biti + the participle of the same verb — and the participle must agree with a neuter noun.',
        explanation:
          'Predavanje je otkazano. — the vague "they" disappears, predavanje becomes the subject, and the participle takes the neuter ending -o to agree with it.',
      },
      4,
      0,
      {
        type: 'match',
        q: 'Same content, two registers. Match each spoken sentence to its official version.',
        pairs: [
          ['Nemamo love.', 'Nedostaju financijska sredstva.'],
          ['Zatvorili su cestu.', 'Cesta je zatvorena za promet.'],
          ['Traže nove ljude.', 'Otvoren je natječaj za zapošljavanje.'],
          ['Kasnimo s poslom.', 'Radovi neće biti završeni na vrijeme.'],
        ],
        explanation:
          'Official writing avoids colloquial words (lova → financijska sredstva), names nobody (zatvorili su → je zatvorena, traže → otvoren je natječaj) and prefers nouns to verbs (zapošljavanje, radovi, promet).',
      },
      {
        type: 'fix',
        q: 'A formal e-mail to a professor you address with Vi. One word breaks the register. Tap it.',
        words: ['Poštovani', 'profesore,', 'možeš', 'li', 'mi', 'poslati', 'popis', 'literature?'],
        wrong: 2,
        answer: 'možete',
        hint: 'The opening has chosen the polite register. Which word is still in the form you would use with a friend?',
        explanation:
          'Poštovani profesore, možete li mi poslati popis literature? — once the formal opening is chosen, every verb stays in the Vi-form to the end of the message.',
      },
      10,
      {
        type: 'tf',
        q: 'Rečenica „Zakon je izmijenjen” kaže tko je izmijenio zakon.',
        answer: false,
        hint: 'Look for a doer in the sentence. Is there one?',
        explanation:
          'False. biti + participle leaves the doer out — which is exactly why official texts like it. To name the doer you would write an active sentence: Vlada je izmijenila zakon.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "The results will be published on Monday."',
        words: ['Rezultati', 'će', 'biti', 'objavljeni', 'u', 'ponedjeljak.'],
        accept: [
          'U ponedjeljak će biti objavljeni rezultati.',
          'Rezultati će u ponedjeljak biti objavljeni.',
          'U ponedjeljak će rezultati biti objavljeni.',
          'Rezultati će biti u ponedjeljak objavljeni.',
        ],
        explanation:
          'Rezultati će biti objavljeni u ponedjeljak. — the future of the passive: će + biti + the participle, which is masculine plural to agree with rezultati. The short word će stands in second position.',
      },
      1,
      {
        type: 'listen',
        audio:
          'Obavještavamo stanare da će se u četvrtak od osam do dvanaest sati obavljati radovi na vodovodu; stoga u tom razdoblju neće biti vode.',
        q: 'What should the tenants expect?',
        options: [
          'A tenants’ meeting on Thursday at eight',
          'A higher water bill from Thursday on',
          'No elevator for the whole of Thursday',
          'No water on Thursday morning',
        ],
        correct: 3,
        explanation:
          'radovi na vodovodu — work on the water pipes, on Thursday from eight to twelve; stoga u tom razdoblju neće biti vode — therefore there will be no water during that time.',
      },
      {
        type: 'dictate',
        audio: 'Sastanak je odgođen zbog bolesti.',
        answer: 'Sastanak je odgođen zbog bolesti.',
        hint: 'Five words: "The meeting has been postponed because of illness."',
        explanation:
          'Sastanak je odgođen zbog bolesti. — biti + participle (odgođen, masculine like sastanak), and zbog + genitive for the cause.',
      },
    ],
  },

  // ── Presentations ──────────────────────────────────────────────────────────
  presentations: {
    text: {
      kind: 'dialogue',
      title: 'Kako Osječani putuju na posao',
      lines: [
        {
          who: 'Petra',
          hr: 'Dobar dan svima i hvala što ste došli u tolikom broju.',
          en: 'Good afternoon everyone, and thank you for coming in such numbers.',
        },
        {
          who: 'Petra',
          hr: 'Danas bih vam željela predstaviti rezultate našeg istraživanja o tome kako stanovnici Osijeka putuju na posao.',
          en: 'Today I would like to present to you the results of our research into how the people of Osijek travel to work.',
        },
        {
          who: 'Petra',
          hr: 'Podijelila sam izlaganje u tri dijela: prvo ću govoriti o automobilima, zatim o javnom prijevozu, a na kraju o biciklima.',
          en: 'I have divided the talk into three parts: first I will talk about cars, then about public transportation, and finally about bicycles.',
        },
        {
          who: 'Petra',
          hr: 'Kao što vidite na slajdu, više od polovice ispitanika i dalje svaki dan sjeda u automobil, iako živi manje od pet kilometara od posla.',
          en: 'As you can see on the slide, more than half of the people surveyed still get into a car every day, although they live less than five kilometers from work.',
        },
        {
          who: 'Petra',
          hr: 'Prelazim na sljedeću točku. Ovaj grafikon pokazuje da je broj putnika u tramvajima u pet godina pao za petinu.',
          en: 'I am moving on to the next point. This chart shows that the number of streetcar passengers has fallen by a fifth in five years.',
        },
        {
          who: 'Petra',
          hr: 'Obratite pozornost na zelenu liniju: jedino broj biciklista raste, i to svake godine.',
          en: 'Pay attention to the green line: only the number of cyclists is rising, and it does so every year.',
        },
        {
          who: 'Petra',
          hr: 'Ukratko, građani su spremni ostaviti automobil kod kuće, ali samo ako se na biciklu osjećaju sigurno. Time zaključujem izlaganje. Hvala na pažnji!',
          en: 'In short, people are ready to leave the car at home, but only if they feel safe on a bicycle. That concludes my talk. Thank you for your attention!',
        },
        {
          who: 'Gospodin Marić',
          hr: 'Rekli ste da broj biciklista raste. Znate li koliko je novih staza grad izgradio u tom razdoblju?',
          en: 'You said that the number of cyclists is rising. Do you know how many new paths the city built in that period?',
        },
        {
          who: 'Petra',
          hr: 'Ako sam dobro razumjela, pitate o duljini novih biciklističkih staza? To je dobro pitanje. Nisam sigurna u točan broj, ali provjerit ću i javiti Vam se.',
          en: 'If I understood correctly, you are asking about the length of the new bike paths? That is a good question. I am not sure of the exact number, but I will check and get back to you.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the talk: which is the only number that is going up?',
          options: [
            'The number of streetcar passengers',
            'The number of cyclists',
            'The number of people who drive to work',
            'The number of new bike paths',
          ],
          correct: 1,
          hint: 'Petra asks the audience to look at one line on the chart — the green one.',
          explanation:
            'Jedino broj biciklista raste, i to svake godine. Streetcar passengers fell by a fifth, and nobody knows yet how many paths were built.',
        },
        {
          q: 'Petra does not know the answer to Mr. Marić’s question. Why does she begin with "Ako sam dobro razumjela, pitate o…"?',
          options: [
            'To show that the question has nothing to do with her topic',
            'Because she could not hear him and wants him to speak up',
            'To pass the question on to somebody else in the room',
            'To check that she has understood the question — and to win a moment to think',
          ],
          correct: 3,
          hint: 'Notice what she does right after it: she praises the question, admits what she does not know, and promises something.',
          explanation:
            'Rephrasing the question checks that you understood it and buys thinking time. Then she is honest (Nisam sigurna) and promises to follow up (provjerit ću i javiti Vam se) — far better than a bare "Ne znam".',
        },
        {
          type: 'type',
          q: 'Now you. Next week a MAN gives the same talk. His opening: Danas bih vam ____ predstaviti naše rezultate. (željeti)',
          answer: 'želio',
          accept: ['htio'],
          hint: 'The conditional is bih + the participle of the verb, and the participle shows whether a man or a woman is speaking.',
          explanation:
            'Danas bih vam želio predstaviti… — the conditional softens the opening, and the participle is masculine: želio. A woman says željela.',
        },
        {
          type: 'transform',
          q: 'Petra and her colleague Ivan answer the question together. Change her sentence so that it speaks for both of them.',
          from: 'Ako sam dobro razumjela, pitate o stazama?',
          answer: 'Ako smo dobro razumjeli, pitate o stazama?',
          accept: ['Ako smo dobro razumjeli, pitate nas o stazama?'],
          hint: 'Two words change: the short form of biti, and the participle — a woman and a man together take the masculine plural.',
          explanation:
            'Ako smo dobro razumjeli… — the first person plural smo, and the participle in the masculine plural (-li), which is used for a mixed group.',
        },
        {
          type: 'type',
          q: 'Now you. Before she finishes, Petra wants everyone to look at the first chart once more: ____ se na trenutak na prvi grafikon. (vratiti — "let us…")',
          answer: 'Vratimo',
          hint: '"Let us…" is the imperative for mi: the stem of the verb plus the ending for we.',
          explanation:
            'Vratimo se na trenutak na prvi grafikon. — the first person plural imperative (vratimo se), a signpost that takes the room back to an earlier point.',
        },
      ],
    },
    mix: [
      4,
      5,
      0,
      {
        type: 'sort',
        q: 'Where in a talk would you say it?',
        groups: ['Opening the talk', 'Steering through the middle', 'Closing the talk'],
        items: [
          { hr: 'Dobar dan svima.', group: 0 },
          { hr: 'Prelazim na sljedeću točku.', group: 1 },
          { hr: 'Time zaključujem izlaganje.', group: 2 },
          { hr: 'Tema mog izlaganja je turizam.', group: 0 },
          { hr: 'Vratimo se na trenutak na brojke.', group: 1 },
          { hr: 'Ima li pitanja?', group: 2 },
        ],
        explanation:
          'A talk opens with a greeting and its topic, is steered with signposts (prelazim na…, vratimo se na…), and closes with time zaključujem and an invitation to ask questions.',
      },
      6,
      {
        type: 'match',
        q: 'What is the speaker doing? Match each sentence to its job.',
        pairs: [
          ['Kao što vidite na slajdu, cijene rastu.', 'pointing the room to the screen'],
          [
            'Ako sam dobro shvatila, zanima vas cijena?',
            'checking that she has understood a question',
          ],
          [
            'Nisam sigurna, ali provjerit ću.',
            'admitting she does not know — and promising to find out',
          ],
          ['Ukratko, prodaja raste.', 'summing up in one line'],
        ],
        explanation:
          'kao što vidite sends eyes to the slide; ako sam dobro shvatila checks a question; nisam sigurna, ali provjerit ću is the honest answer when you do not know; ukratko introduces a summary.',
      },
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Hvala', 'svima', 'na', 'pažnja', 'i', 'strpljenju.'],
        wrong: 3,
        answer: 'pažnji',
        hint: 'Both things you thank for stand after the same preposition, so they must be in the same case.',
        explanation:
          'Hvala svima na pažnji i strpljenju. — hvala na takes the locative for everything you thank for: na pažnji, na strpljenju.',
      },
      1,
      {
        type: 'transform',
        q: 'A woman opens her talk. Make her sentence polite with the conditional, the way a presentation usually begins.',
        from: 'Želim vam predstaviti naš projekt.',
        answer: 'Željela bih vam predstaviti naš projekt.',
        accept: [
          'Htjela bih vam predstaviti naš projekt.',
          'Danas bih vam željela predstaviti naš projekt.',
          'Voljela bih vam predstaviti naš projekt.',
          'Ja bih vam željela predstaviti naš projekt.',
          'Rado bih vam predstavila naš projekt.',
        ],
        hint: 'The participle of the verb plus bih; the short words bih and vam then stand together in second position.',
        explanation:
          'Željela bih vam predstaviti naš projekt. — the conditional (željela bih) turns a blunt "I want" into "I would like". The clitics keep their order: bih before vam.',
      },
      10,
      {
        type: 'tf',
        q: 'Tko kaže „Brojke govore same za sebe”, misli da brojke treba još dugo objašnjavati.',
        answer: false,
        hint: 'If something speaks for itself, how much more does the speaker need to say?',
        explanation:
          'False. Brojke govore same za sebe — the figures speak for themselves: they are so clear that no long explanation is needed.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "I have divided the talk into three parts." (a woman speaking)',
        words: ['Podijelila', 'sam', 'izlaganje', 'u', 'tri', 'dijela.'],
        accept: [
          'Izlaganje sam podijelila u tri dijela.',
          'Izlaganje sam u tri dijela podijelila.',
          'U tri dijela sam podijelila izlaganje.',
          'U tri sam dijela podijelila izlaganje.',
          'Ja sam podijelila izlaganje u tri dijela.',
          'Ja sam izlaganje podijelila u tri dijela.',
        ],
        explanation:
          'Podijelila sam izlaganje u tri dijela. — sam stands in second position, and after tri the noun is in the form dijela (as after dva and četiri).',
      },
      3,
      {
        type: 'listen',
        audio:
          'Prvo ću vam pokazati rezultate ankete, zatim ću objasniti zašto su važni, a na kraju ću predložiti što bismo mogli promijeniti.',
        q: 'What is the SECOND part of this talk?',
        options: [
          'The results of the survey',
          'A proposal for what could be changed',
          'An explanation of why the results matter',
          'Questions from the audience',
        ],
        correct: 2,
        explanation:
          'prvo — the results of the survey; zatim — objasniti zašto su važni, why they matter; na kraju — a proposal for change. The three signposts give the order.',
      },
      {
        type: 'dictate',
        audio: 'Ako imate pitanja, rado ću odgovoriti.',
        answer: 'Ako imate pitanja, rado ću odgovoriti.',
        hint: 'Six words: "If you have questions, I will gladly answer."',
        explanation:
          'Ako imate pitanja, rado ću odgovoriti. — the usual invitation at the end of a talk; ću follows the first word of its clause, rado.',
      },
    ],
  },

  // ── Meetings and negotiation ───────────────────────────────────────────────
  'meetings-negotiation': {
    text: {
      kind: 'dialogue',
      title: 'Sastanak o novoj mrežnoj stranici',
      lines: [
        {
          who: 'Sanja',
          hr: 'Prelazimo na glavnu točku: nova mrežna stranica agencije. Tomislave, izvoli.',
          en: 'We are moving on to the main item: the agency’s new website. Tomislav, go ahead.',
        },
        {
          who: 'Tomislav',
          hr: 'Hvala. Predlažem da stranicu objavimo već prvog travnja, prije početka sezone.',
          en: 'Thank you. I propose that we launch the site as early as April 1, before the season starts.',
        },
        {
          who: 'Ines',
          hr: 'Oprosti što prekidam, ali je li taj rok realan? Fotografije apartmana još nisu gotove.',
          en: 'Sorry to interrupt, but is that deadline realistic? The photos of the apartments are not ready yet.',
        },
        {
          who: 'Tomislav',
          hr: 'Razumijem tvoju primjedbu, međutim svaki tjedan kašnjenja znači manje rezervacija.',
          en: 'I understand your objection; however, every week of delay means fewer reservations.',
        },
        {
          who: 'Goran',
          hr: 'Ako smijem, htio bih se nadovezati na ono što je rekla Ines. Slažem se s Tomislavom u načelu, ali stranica bez fotografija ostavlja loš dojam.',
          en: 'If I may, I would like to build on what Ines said. I agree with Tomislav in principle, but a site without photos makes a bad impression.',
        },
        {
          who: 'Sanja',
          hr: 'Što se tiče fotografija, mogli bismo angažirati fotografa izvana. Što mislite o tome da prvog travnja objavimo samo osnovnu verziju?',
          en: 'As for the photos, we could hire an outside photographer. What do you think about launching only a basic version on April 1?',
        },
        {
          who: 'Ines',
          hr: 'To zvuči razumno. Predlažem da onda ostatak dodamo do sredine svibnja.',
          en: 'That sounds reasonable. I propose that we then add the rest by mid-May.',
        },
        {
          who: 'Tomislav',
          hr: 'Nisam siguran da je to najbolje rješenje, ali mogu živjeti s tim kompromisom.',
          en: 'I am not sure that is the best solution, but I can live with that compromise.',
        },
        {
          who: 'Sanja',
          hr: 'Dogovoreno. Znači, ostajemo pri prvom travnja za osnovnu verziju. Tko preuzima fotografa?',
          en: 'Agreed. So we are sticking with April 1 for the basic version. Who is taking on the photographer?',
        },
        {
          who: 'Goran',
          hr: 'Ja ću. Javit ću vam se do petka s ponudom.',
          en: 'I will. I will get back to you by Friday with a quote.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the meeting: what did the team finally agree on?',
          options: [
            'To postpone the whole site until mid-May',
            'To launch a basic version on April 1 and add the rest by mid-May',
            'To launch the complete site on April 1 without any photos',
            'To give up the new site for this season',
          ],
          correct: 1,
          hint: 'Nobody got everything. Tomislav kept his date; Ines got more time for something.',
          explanation:
            'Sanja’s compromise: prvog travnja objavimo samo osnovnu verziju, and Ines adds: ostatak dodamo do sredine svibnja. Sanja closes it with Dogovoreno.',
        },
        {
          q: 'Tomislav says "Predlažem da stranicu objavimo", with da + the present of "we". Why not simply an infinitive?',
          options: [
            'Because the launch lies in the future',
            'Because da + present sounds more polite than an infinitive',
            'Because objaviti is a perfective verb',
            'Because one person proposes and a different subject — the whole team — is to do it',
          ],
          correct: 3,
          hint: 'Ask twice: who proposes? And who is going to launch the site?',
          explanation:
            'Tomislav proposes; "we" launch. When the second action has its own subject, it needs a full clause: da + the present — the present even though the action lies ahead (not bismo, not ćemo).',
        },
        {
          type: 'type',
          q: 'Now you. Goran builds on what Ines said; you want to build on Sanja’s idea: Htio bih se nadovezati na ____ ideju. (Sanjin)',
          answer: 'Sanjinu',
          hint: 'This verb takes na + the accusative, and the possessive agrees with a feminine noun.',
          explanation:
            'nadovezati se na + accusative: na Sanjinu ideju. Not the locative (na Sanjinoj ideji) — you are attaching your words to hers, a direction.',
        },
        {
          type: 'transform',
          q: 'A bare "Ne slažem se" sounds sharp in a meeting. You are answering Sanja: first grant that you agree with her in principle, then give the same objection after "ali".',
          from: 'Ne slažem se. Rok je prekratak.',
          answer: 'Slažem se sa Sanjom u načelu, ali rok je prekratak.',
          accept: [
            'Slažem se u načelu sa Sanjom, ali rok je prekratak.',
            'U načelu se slažem sa Sanjom, ali rok je prekratak.',
            'Slažem se sa Sanjom u načelu, ali je rok prekratak.',
            'Slažem se u načelu sa Sanjom, ali je rok prekratak.',
            'U načelu se slažem sa Sanjom, ali je rok prekratak.',
            'Sa Sanjom se slažem u načelu, ali rok je prekratak.',
            'Sa Sanjom se u načelu slažem, ali rok je prekratak.',
            'Slažem se s tobom u načelu, ali rok je prekratak.',
            'Slažem se u načelu, ali rok je prekratak.',
            'U načelu se slažem, ali rok je prekratak.',
            'U načelu se slažem s tobom, ali rok je prekratak.',
            'Slažem se u načelu s tobom, ali rok je prekratak.',
            'Slažem se s tobom u načelu, ali je rok prekratak.',
            'U načelu se slažem s tobom, ali je rok prekratak.',
            'Slažem se u načelu, ali je rok prekratak.',
            'U načelu se slažem, ali je rok prekratak.',
          ],
          hint: 'Agreeing WITH somebody takes the preposition for "with" and the instrumental — and mind which form of that preposition stands before her name.',
          explanation:
            'Slažem se sa Sanjom u načelu, ali rok je prekratak. — concede first, then object. slagati se s + instrumental, and s becomes sa before a word that begins with s.',
        },
        {
          type: 'type',
          q: 'Now you. Ines has one more proposal for the team: Predlažem da fotografa ____ već sutra. (nazvati — mi)',
          answer: 'nazovemo',
          hint: 'After predlažem da comes the present, in the form for the people who are to do it. The present stem of this verb is not the same as its infinitive stem.',
          explanation:
            'Predlažem da fotografa nazovemo već sutra. — da + the present of nazvati (nazovem, nazoveš… nazovemo), not a conditional and not a future.',
        },
      ],
    },
    mix: [
      5,
      4,
      0,
      {
        type: 'sort',
        q: 'What is the speaker doing at the meeting?',
        groups: ['Asking for the floor', 'Making a proposal', 'Disagreeing gently'],
        items: [
          { hr: 'Mogu li nešto dodati?', group: 0 },
          { hr: 'Predlažem da počnemo ranije.', group: 1 },
          { hr: 'Slažem se u načelu, ali rok je prekratak.', group: 2 },
          { hr: 'Ako smijem, samo kratko…', group: 0 },
          { hr: 'Što mislite o tome da pozovemo i dobavljača?', group: 1 },
          { hr: 'Razumijem, međutim nisam sigurna da je to najbolje rješenje.', group: 2 },
        ],
        explanation:
          'You ask for a turn before you take it (mogu li…, ako smijem…), you propose with predlažem da or što mislite o tome da + the present, and you disagree by conceding first: slažem se u načelu, ali… / razumijem, međutim…',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("I propose that we postpone the meeting by a week.")',
        words: ['Predlažem', 'da', 'odgoditi', 'sastanak', 'za', 'tjedan', 'dana.'],
        wrong: 2,
        answer: 'odgodimo',
        hint: 'After da a verb needs a person. Who is to do the postponing, according to the English sentence?',
        explanation:
          'Predlažem da odgodimo sastanak za tjedan dana. — da is followed by a verb in the present with a person, here "we"; an infinitive cannot follow da.',
      },
      {
        type: 'transform',
        q: 'Turn this "let us…" into a proposal that begins with "I propose that…".',
        from: 'Pomaknimo sastanak na četvrtak.',
        answer: 'Predlažem da pomaknemo sastanak na četvrtak.',
        accept: [
          'Predlažem da sastanak pomaknemo na četvrtak.',
          'Ja predlažem da pomaknemo sastanak na četvrtak.',
          'Predlažem da na četvrtak pomaknemo sastanak.',
        ],
        hint: 'The imperative becomes the present of the same verb for "we" — only one letter of the ending changes.',
        explanation:
          'Predlažem da pomaknemo sastanak na četvrtak. — the imperative pomaknimo becomes the present pomaknemo after predlažem da.',
      },
      7,
      {
        type: 'match',
        q: 'Each beginning needs a different case. Match it to the only ending that fits.',
        pairs: [
          ['Slažem se', 's vašim prijedlogom.'],
          ['Nadovezala bih se', 'na vaš prijedlog.'],
          ['Zahvaljujem', 'na vašem prijedlogu.'],
          ['Što se tiče', 'vašeg prijedloga, nemam primjedbi.'],
        ],
        explanation:
          'slagati se s + instrumental; nadovezati se na + accusative; zahvaljivati na + locative; što se tiče + genitive. The same noun, four different cases — each one fixed by what stands before it.',
      },
      {
        type: 'tf',
        q: 'Tko na sastanku kaže „Dogovoreno”, želi još raspravljati o prijedlogu.',
        answer: false,
        hint: 'Is this a word that opens a discussion, or one that ends it?',
        explanation:
          'False. Dogovoreno means "Agreed" — it closes the point and turns a discussion into a decision. To keep talking you would say something like Čekajte, imam još jedno pitanje.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "As far as costs are concerned, we could find a cheaper supplier."',
        words: [
          'Što',
          'se',
          'tiče',
          'troškova,',
          'mogli',
          'bismo',
          'naći',
          'jeftinijeg',
          'dobavljača.',
        ],
        accept: [
          'Što se troškova tiče, mogli bismo naći jeftinijeg dobavljača.',
          'Što se tiče troškova, mogli bismo jeftinijeg dobavljača naći.',
          'Što se tiče troškova, jeftinijeg dobavljača mogli bismo naći.',
          'Mogli bismo naći jeftinijeg dobavljača što se tiče troškova.',
          'Mogli bismo, što se tiče troškova, naći jeftinijeg dobavljača.',
        ],
        explanation:
          'Što se tiče troškova, mogli bismo naći jeftinijeg dobavljača. — što se tiče + genitive names the topic; mogli bismo is the conditional that makes a proposal instead of a demand.',
      },
      3,
      {
        type: 'listen',
        audio:
          'Slažem se u načelu s vašim prijedlogom, ali predlažem da odluku ipak donesemo tek kad dobijemo ponudu iz Rijeke.',
        q: 'What does the speaker want?',
        options: [
          'To wait with the decision until the quote from Rijeka arrives',
          'To reject the proposal completely',
          'To decide today, before the quote arrives',
          'To send a quote to Rijeka',
        ],
        correct: 0,
        explanation:
          'The speaker concedes first (slažem se u načelu) and then proposes to wait: da odluku donesemo tek kad dobijemo ponudu iz Rijeke — only when the quote from Rijeka has come.',
      },
      {
        type: 'dictate',
        audio: 'Vraćamo se na to sljedeći put.',
        answer: 'Vraćamo se na to sljedeći put.',
        hint: 'Six words: "We will come back to that next time."',
        explanation:
          'Vraćamo se na to sljedeći put. — vraćati se na + accusative (na to); the present is used here for something already settled for the future.',
      },
    ],
  },
};
