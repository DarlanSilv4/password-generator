import { useEffect, useRef, useState } from "react";

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function CharacterLength({ value, setValue }: Props) {
  const rangeInputNode = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const element = rangeInputNode.current;

    if (!element) return;

    const { min, max, value } = element;

    element.style.setProperty("--value", value);
    element.style.setProperty("--min", min == "" ? "0" : min);
    element.style.setProperty("--max", max == "" ? "0" : max);

    element.addEventListener("input", () =>
      element.style.setProperty("--value", element.value)
    );
  }, [rangeInputNode]);

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex items-center justify-between w-full">
        <span className="font-medium">Character Length</span>
        <span className="text-green font-bold text-xl">{value}</span>
      </div>

      <input
        type="range"
        ref={rangeInputNode}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min="0"
        max="20"
      />
    </div>
  );
}
