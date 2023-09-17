"use client";

import _, { isUndefined } from "lodash";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

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
      <p className="mb-4 text-lg text-center">{poem.text}</p>
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
  const poems = [
    {
      text: "some poetry text",
      isGPT: true,
    },
    {
      text: "some poetry text 2",
      isGPT: false,
    },
    {
      text: "some poetry text 3",
      isGPT: true,
    },
    {
      text: "some poetry text 4",
      isGPT: false,
    },
  ];
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
                    : "No! 👩‍🎨 wrote it"
                  }
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
