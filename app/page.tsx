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
    <div className="flex flex-col items-center justify-center border-red-100">
      <p className="mb-4 text-lg text-center">{poem.text}</p>
      <div className="flex space-x-4">
        <button
          disabled={!isUndefined(isCorrectAnswer)}
          onClick={() => setIsCorrectAnswer(poem.isGPT === false)}
          className="px-4 py-2 bg-blue-500 text-white rounded w-full"
        >
          Rupi Kaur
        </button>
        <button
          disabled={!isUndefined(isCorrectAnswer)}
          onClick={() => setIsCorrectAnswer(poem.isGPT === true)}
          className="px-4 py-2 bg-green-500 text-white rounded w-full"
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
    nextPoem()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextPoem = () => {
    setRandomPoem(_.sample(poems));
    setIsCorrectAnswer(undefined);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="relative flex place-items-center text-black">
        {randomPoem && (
          <IsPoemGPT
            poem={randomPoem}
            isCorrectAnswer={isCorrectAnswer}
            setIsCorrectAnswer={setIsCorrectAnswer}
          />
        )}
        {isCorrectAnswer !== undefined &&
          (isCorrectAnswer === true ? "Correct" : "Wrong")}
        <button
          onClick={nextPoem}
          disabled={isUndefined(isCorrectAnswer)}
          className="px-4 py-2 bg-blue-500 text-white rounded w-full"
        >
          Next
        </button>
      </div>
    </main>
  );
}
