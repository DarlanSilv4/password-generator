import { useState } from "react";

import { ReactComponent as CopySvg } from "./assets/copy.svg";
import { ReactComponent as ArrowSvg } from "./assets/arrow.svg";

import CharacterLength from "./components/CharacterLength";
import CharacterOptions from "./components/CharacterOptions";
import StrengthBox from "./components/StrengthBox";

function App() {
  const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
  const NUMBERS = "1234567890";
  const SYMBOLS = " ~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";

  const [characterLength, setCharacterLength] = useState("10");
  const [checkboxOptions, setCheckboxOptions] = useState<string[]>([
    "uppercase",
    "lowercase",
    "numbers",
  ]);
  const [password, setPassword] = useState("");

  const handleGeneratePassword = () => {
    const characters: string[] = [];
    const passwordLength = parseInt(characterLength);

    if (checkboxOptions.includes("uppercase")) characters.push(UPPERCASE_CHARS);
    if (checkboxOptions.includes("lowercase")) characters.push(LOWERCASE_CHARS);
    if (checkboxOptions.includes("numbers")) characters.push(NUMBERS);
    if (checkboxOptions.includes("symbols")) characters.push(SYMBOLS);

    const charactersInString = characters.join("");
    const charactersLength = charactersInString.length;

    const password: string[] = [];
    for (let i = 0; i < passwordLength; i++) {
      const radomChar = charactersInString.charAt(
        Math.floor(Math.random() * charactersLength)
      );

      password.push(radomChar);
    }

    setPassword(password.join(""));
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-w-screen min-h-screen py-5 bg-background text-white font-mono">
      <h1 className="text-white opacity-60 font-bold">Password Generator</h1>
      <section className="flex items-center justify-between p-4 bg-foreground w-11/12  sm:w-2/3 lg:w-2/5 lg:max-w-md text-white font-bold text-xl">
        <p>{password}</p>
          <CopySvg className="text-green hover:text-white" />
        </button>
      </section>
      <section className="flex flex-col items-center gap-5 p-4 bg-foreground w-11/12 sm:w-2/3 lg:w-2/5 lg:max-w-md">
        <CharacterLength
          value={characterLength}
          setValue={setCharacterLength}
        />
        <CharacterOptions
          options={checkboxOptions}
          setOptions={setCheckboxOptions}
        />
        <StrengthBox
          charactersLength={characterLength}
          checkedOptions={checkboxOptions}
        />
        <button
          className="flex p-4 gap-4 items-center justify-center w-full bg-green hover:bg-transparent text-foreground hover:text-green border border-green font-bold uppercase"
          onClick={() => handleGeneratePassword()}
        >
          <span>Generate</span>
          <ArrowSvg />
        </button>
      </section>
    </div>
  );
}

export default App;
