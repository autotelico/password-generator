'use client';
import { useState } from 'react';
import generatePassword from '../scripts/passwordGenerator';
import { TbCopy, TbCopyCheck } from 'react-icons/tb';

const initialPassword = generatePassword(12);

export default function MainContent(): React.ReactNode {
  const [pwLength, setPwLength] = useState(12);
  const [password, setPassword] = useState(initialPassword);
  const [pwWasCopied, setPwWasCopied] = useState(false);

  const passwordGenerate = () => {
    setPassword(generatePassword(pwLength));
    setPwWasCopied(false);
  };

  const updatePwLength = (operation: string): void => {
    if (pwLength > 30) return;
    if (operation === '+') {
      setPwLength((prevLength) => prevLength + 1);
    }
    if (operation === '-') {
      setPwLength((prevLength) => prevLength - 1);
    }
  };

  const copyPasswordToClipboard = () => {
    const pwInput =
      document.querySelector<HTMLInputElement>('#password-input')!.value;
    navigator.clipboard.writeText(pwInput);
    setPwWasCopied(true);
  };

  return (
    <main className="bg-slate-200 py-10">
      <div className="w-[300px] sm:w-[500px] h-[500px] sm:h-auto relative left-[50%] translate-x-[-50%]">
        <h2 className="text-center">Your password:</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <input
            type="text"
            value={password}
            id="password-input"
            className="rounded-md p-1"
          />
          {pwWasCopied ? (
            <TbCopyCheck size={30} onClick={copyPasswordToClipboard} />
          ) : (
            <TbCopy size={30} onClick={copyPasswordToClipboard} />
          )}
        </div>
        <button
          onClick={passwordGenerate}
          className="bg-[#242424] text-[#eee] px-4 py-2 rounded-md font-semibold relative left-[50%] translate-x-[-50%] my-5"
        >
          Generate
        </button>
        <div className="flex justify-evenly gap-5">
          <button
            onClick={() => updatePwLength('-')}
            className="size-[50px] bg-[#242424] text-[#eee] px-4 py-2 rounded-md font-semibold"
          >
            -
          </button>
          <div>
            <p className="text-center">Password length:</p>
            <p className="text-center text-2xl">{pwLength}</p>
          </div>
          <button
            onClick={() => updatePwLength('+')}
            className="size-[50px] bg-[#242424] text-[#eee] px-4 py-2 rounded-md font-semibold"
          >
            +
          </button>
        </div>
      </div>
    </main>
  );
}
