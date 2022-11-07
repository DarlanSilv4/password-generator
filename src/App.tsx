import { ReactComponent as CopySvg } from "./assets/copy.svg";
import { ReactComponent as CheckboxBlankSvg } from "./assets/checkbox_blank.svg";
import { ReactComponent as CheckboxDoneSvg } from "./assets/checkbox_done.svg";
import { ReactComponent as ArrowSvg } from "./assets/arrow.svg";

function App() {
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
        <div className="flex items-center justify-between w-full">
          <span className="font-medium">Character Length</span>
          <span className="text-green font-bold text-xl">10</span>
        </div>

        <input
          id="default-range"
          type="range"
          value={10}
          step="1"
          min="0"
          max="20"
          className="w-full h-2 bg-green rounded-lg  appearance-none cursor-pointer"
        />

        <div className="flex gap-2 flex-col items-start w-full my-4">
          <label className="flex gap-4 cursor-pointer">
            <input className="hidden" type="checkbox" value="uppercase" />
            <CheckboxDoneSvg className="text-green" />
            Include Uppercase Letters
          </label>
          <label className="flex gap-4 cursor-pointer">
            <input className="hidden" type="checkbox" value="lowercase" />
            <CheckboxDoneSvg className="text-green" />
            Include Lowercase Letters
          </label>
          <label className="flex gap-4 cursor-pointer">
            <input className="hidden" type="checkbox" value="numbers" />
            <CheckboxDoneSvg className="text-green" />
            Include Numbers
          </label>
          <label className="flex gap-4 cursor-pointer">
            <input className="hidden" type="checkbox" value="symbols" />
            <CheckboxBlankSvg className="hover:text-green" />
            Include Symbols
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-background w-full text-lg">
          <span className="opacity-60 font-bold ">STRENGTH</span>
          <div className="flex gap-4">
            <span className="font-bold">MEDIUM</span>
            <div className="flex gap-2">
              <div className="w-3 bg-yellow" />
              <div className="w-3 bg-yellow" />
              <div className="w-3 bg-yellow" />
              <div className="w-3 border-2" />
            </div>
          </div>
        </div>

        <button className="flex p-4 gap-4 items-center justify-center w-full bg-green hover:bg-transparent text-foreground hover:text-green border border-green font-bold uppercase">
          <span>Generate</span>
          <ArrowSvg />
        </button>
      </section>
    </div>
  );
}

export default App;
