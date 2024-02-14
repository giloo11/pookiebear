"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Womp womp",
      "bro pls",
      "bro im crying",
      "want some flowers?",
      "what about strawberry carrot chocolate cake?",
      "PLEASE POOKIE",
      "bro :*(",
      "BROO PLSS",
      "im dead if u even care",
      "ok ur talking to vincent's ghost",
      "please :(((",
      ":((((",
      "POOKIE PLEASE",
      "iiyak na talaga ako",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media1.tenor.com/m/_4xCiEhhoZsAAAAd/dog-smile.gif" />
          <div className="my-4 text-4xl font-bold">
            Yay! You will be my Valentine! lock in pookie hit me up
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media.tenor.com/bWUeVRqW9-IAAAAi/fast-cat-cat-excited.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              YERRRRRR
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
