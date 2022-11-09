import { useState } from "react";

import { ReactComponent as CopySvg } from "./assets/copy.svg";
import { ReactComponent as ArrowSvg } from "./assets/arrow.svg";

import CharacterLength from "./components/CharacterLength";
import CharacterOptions from "./components/CharacterOptions";
import StrengthBox from "./components/StrengthBox";

function App() {
  const [characterLength, setCharacterLength] = useState("10");
  const [checkboxOptions, setCheckboxOptions] = useState<string[]>([
    "uppercase",
    "lowercase",
    "numbers",
  ]);

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-w-screen min-h-screen py-5 bg-background text-white font-mono">
      <h1 className="text-white opacity-60 font-bold">Password Generator</h1>
      <section className="flex items-center justify-between p-4 bg-foreground w-11/12  sm:w-2/3 lg:w-2/5 lg:max-w-md text-white font-bold text-xl">
        <p>OojJF57LtxT08AW53TBy</p>
        <button className="cursor-pointer">
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
        <button className="flex p-4 gap-4 items-center justify-center w-full bg-green hover:bg-transparent text-foreground hover:text-green border border-green font-bold uppercase">
          <span>Generate</span>
          <ArrowSvg />
        </button>
      </section>
    </div>
  );
}

export default App;
