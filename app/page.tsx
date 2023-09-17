"use client";

import _, { isUndefined } from "lodash";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const poems = [
  {
    isGPT: true,
    text: "In my mother's sari,\nColors of sacrifice,\nStrength woven in threads,\nMy heritage, her love.",
  },
  {
    isGPT: true,
    text: "In my heart, a brown girl danced\nbarefoot on foreign soil,\nsaid, this too, is home.",
  },
  {
    isGPT: true,
    text: "under my brown skin \n-bones of ancient queens reign\ndon't fear your reflection\n-remember your roots, not their disdain",
  },
  {
    isGPT: true,
    text: "My mother's saree, \nRich in history, in color,\nWeaves tradition through threads, \nAn immigrant's battle armor.",
  },
  {
    isGPT: true,
    text: "In my mother's sari,\nI found my strength,\nBetween its crimson folds,\nIn traditions weaved dense.\nShe wore oceans, I am the shore,\nWe are waves, forever more.",
  },
  {
    isGPT: true,
    text: "in my mother's eyes,\ni see earthquakes and monsoons,\na homeland left behind,\nsweet mangoes turned to ruins.\nlove wrapped in loss,\nher sacrifice my boon.",
  },
  {
    isGPT: true,
    text: "My mother's hands \nstrewn with stories \nOf courage, spices,  \nand old worlds. \nStill, they hold me. \nforever the softest refuge.",
  },
  {
    isGPT: true,
    text: "we wear our heritage \nlike an unclothed wound\nhidden beneath silk saris\nsymbols of a homespun heart\nwe bloom\nin foreign soil\nexotic yet unseen",
  },
  {
    isGPT: true,
    text: "In my mother's spices,\nHer history unfolds,\nEach grain is an ancestor,\nTelling tales yet untold.",
  },
  {
    isGPT: true,
    text: "in my mother's spices \ni found my spirit\nacross oceans, her recipes \nstitched our torn identity\nwe consume, we are consumed\nby diaspora's delicacy",
  },
  {
    isGPT: true,
    text: "Femininity was not my burden,\nbut my strength.\nCarried over oceans,\nIn spice-scented memories,\nI bloom.",
  },
  {
    isGPT: true,
    text: "In my mother's kitchen, spices whisper tales of home.\nRice fields, delicately unfurling in light like love.\nMy roots, bared in a butter-brushed naan\u2019s warmth.\nCumin-seeds of memories, crying in a foreign land.\nMy skin, a map, stitched by generations past.\nWe bloom in colors beyond the western gaze.",
  },
  {
    isGPT: true,
    text: "Skin like chai,\nSteeped in stories of saffron sunsets,\nFeet rooted in distant soil,\nEyes brimming with immigrant dreams.",
  },
  {
    isGPT: true,
    text: "My roots stretched\nacross oceans,\nacross pain.\nMy blossoms,\nforeign yet familiar,\na home in their fragrance.",
  },
  {
    isGPT: true,
    text: "Brown skin, \nnot a stain,\nbut a story.\nHeritage alive,\nin every pore,\nrich and unapologetically.",
  },
  {
    isGPT: true,
    text: "On mother's sari\nWoven tales of struggle, hope\ncolor of resilience \nin its many folds",
  },
  {
    isGPT: true,
    text: "In my mother's curry,\na nation's history infused.\nHer spices, my lineage,\nmigrant dreams brewed.",
  },
  {
    isGPT: true,
    text: "Under mango sunsets\nwe carved dreams \ninto our skin\ntelling stories only \nspiced winds would understand\nfamily history in every sigh.",
  },
  {
    isGPT: true,
    text: "East-born echoes in my veins,\nWest whispers in my soul,\nBoth dance upon my tongue,\ntoo much, never whole.",
  },
  {
    isGPT: true,
    text: "In the kitchen of my Amma \nI learned strength \nSpices, sweat, love - \nA woman's courage in every breath.",
  },
  {
    isGPT: true,
    text: "She wears her culture \nlike a sari draped from \nthe stars, \nknotted in heritage,\ndyed in resilience,\nhemmed in hope,\nunraveling stories with every step.",
  },
  {
    isGPT: true,
    text: "In my mother's kitchen\nI learned \nto conjure spice-laden stories,\neach dish a memory,\neach flavor - home.",
  },
  {
    isGPT: true,
    text: "brown eyes reflecting \nhomeland's sunsets \non diaspora dawns",
  },
  {
    isGPT: true,
    text: "Henna hands reaching out,\nIn foreign lands.\nHomeward hearts beating,\nIn unseen bands.",
  },
  {
    isGPT: true,
    text: "i plant seeded dreams \nin my mother's old sari\nhoping to bloom\nsecond generation \nof immigrant garden",
  },
  {
    isGPT: false,
    text: "if i knew what\nsafety looked like\ni would have spent\nless time falling into\narms that were not\n",
  },
  {
    isGPT: false,
    text: "that\u2019s the\nthing about love\nit marinates your lips\ntill the only word your\nmouth remembers\nis his name\n",
  },
  {
    isGPT: false,
    text: "he was supposed to be\nthe first male love of your life\nyou still search for him\neverywhere\n- father",
  },
  {
    isGPT: false,
    text: "you talk too much\nhe whispers into my ear\ni can think of better ways to use that mouth",
  },
  {
    isGPT: false,
    text: "you mustn\u2019t have to\nmake them want you\nthey must want you themselves",
  },
  {
    isGPT: false,
    text: "you whisper\ni love you\nwhat you mean is\ni don\u2019t want you to leave",
  },
  { isGPT: false, text: "accept yourself\nas you were designed" },
  {
    isGPT: false,
    text: "i thank the universe\nfor taking\neverything it has taken\nand giving to me\neverything it is giving\n- balance\n",
  },
  {
    isGPT: false,
    text: "your body\nis a museum\nof natural disasters\ncan you grasp how\nstunning that is\n",
  },
  {
    isGPT: false,
    text: "my heart aches for sisters more than anything\nit aches for women helping women\nlike flowers ache for spring\n",
  },
  {
    isGPT: false,
    text: "if you were born with\nthe weakness to fall\nyou were born with\nthe strength to rise",
  },
  {
    isGPT: false,
    text: "i\u2019ve had sex\n she said\nbut i don\u2019t know\nwhat making love\nfeels like",
  },
  {
    isGPT: false,
    text: "i don\u2019t want to be friends\ni want all of you\n- more",
  },
  {
    isGPT: false,
    text: "don\u2019t mistake\nsalt for sugar\nif he wants to\nbe with you\nhe will\nit\u2019s that simple\n",
  },
  {
    isGPT: false,
    text: "the next time you\nhave your coffee black\nyou\u2019ll taste the bitter\nstate he left you in\nit will make you weep\nbut you\u2019ll never\nstop drinking\nyou\u2019d rather have the\ndarkest parts of him\nthan have nothing\n",
  },
  {
    isGPT: false,
    text: "the rape will\ntear you\nin half\nbut it\nwill not\nend you",
  },
  {
    isGPT: false,
    text: "the idea that we are\nso capable of love\nbut still choose\nto be toxic\n",
  },
  {
    isGPT: false,
    text: "nothing is safer\nthan the sound of you\nreading out loud to me\n- the perfect date\n",
  },
  {
    isGPT: false,
    text: "the first boy that kissed me\nheld my shoulders down\nlike the handlebars of\nthe first bicycle\nhe ever rode\ni was five\nhe had the smell of\nstarvation on his lips\nwhich he picked up from\nhis father feasting on his mother at 4 a.m.\nhe was the first boy\nto teach me my body was\nfor giving to those that wanted\nthat i should feel anything\nless than whole\nand my god\ndid i feel as empty\nas his mother at 4:25 a.m.",
  },
  { isGPT: false, text: "your voice\nalone\ndrives me\nto tears" },
  {
    isGPT: false,
    text: "you were a dragon long before\nhe came around and said\nyou could fly\nyou will remain a dragon\nlong after he\u2019s left",
  },
  {
    isGPT: false,
    text: "i know it\u2019s hard\nbelieve me\ni know it feels like\ntomorrow will never come\nand today will be the most\ndifficult day to get through\nbut i swear you will get through\nthe hurt will pass\nas it always does\nif you give it time and\nlet it so let it\ngo\nslowly\nlike a broken promise\nlet it go",
  },
  { isGPT: false, text: "to be\nsoft\nis\nto be\npowerful" },
  {
    isGPT: false,
    text: "i\u2019d be lying if i said\nyou make me speechless\nthe truth is you make my\ntongue so weak it forgets\nwhat language to speak in\n",
  },
  {
    isGPT: false,
    text: "how do you turn\na forest fire like me\nso soft i turn into\nrunning water\n",
  },
];

type Poem = {
  text: string;
  isGPT: boolean;
};

const IsPoemGPT = ({
  poem,
  isCorrectAnswer,
  setIsCorrectAnswer,
}: {
  poem: Poem;
  isCorrectAnswer: boolean | undefined;
  setIsCorrectAnswer: Dispatch<SetStateAction<boolean | undefined>>;
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-4 text-lg whitespace-pre">{poem.text.toLowerCase()}</p>
      <div className="flex space-x-4">
        <button
          disabled={!isUndefined(isCorrectAnswer)}
          onClick={() => setIsCorrectAnswer(poem.isGPT === false)}
          className="px-4 py-1  rounded w-full border-black border-2"
        >
          Rupi
        </button>
        <button
          disabled={!isUndefined(isCorrectAnswer)}
          onClick={() => setIsCorrectAnswer(poem.isGPT === true)}
          className="px-4 py-1  rounded w-full border-black border-2"
        >
          GPT
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  const [randomPoem, setRandomPoem] = useState<Poem | undefined>(undefined);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | undefined>(
    undefined,
  );

  useEffect(() => {
    nextPoem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextPoem = () => {
    setRandomPoem(_.sample(poems));
    setIsCorrectAnswer(undefined);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100 text-black">
      <div className="bg-white p-10 rounded-lg">
        <div className="relative flex place-items-center ">
          {randomPoem && (
            <IsPoemGPT
              poem={randomPoem}
              isCorrectAnswer={isCorrectAnswer}
              setIsCorrectAnswer={setIsCorrectAnswer}
            />
          )}
        </div>
        <div className="flex flex-col items-center">
          {isCorrectAnswer === undefined && (
            <div className="py-2 text-md">Who wrote this?</div>
          )}

          {isCorrectAnswer !== undefined && (
            <div className="flex flex-col justify-center items-center">
              <div className="py-2 text-lg">
                {isCorrectAnswer
                  ? randomPoem!.isGPT
                    ? "Yes! 🤖 wrote it"
                    : "Yes! 👩‍🎨 wrote it"
                  : randomPoem!.isGPT
                  ? "No! 🤖 wrote it"
                  : "No! 👩‍🎨 wrote it"}
              </div>
              <button
                onClick={nextPoem}
                disabled={isUndefined(isCorrectAnswer)}
                className="px-4 py-2 rounded "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
