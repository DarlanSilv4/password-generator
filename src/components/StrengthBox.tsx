import { useEffect, useState } from "react";

interface Props {
  charactersLength: string;
  checkedOptions: string[];
}

type Strength = "too weak!" | "weak" | "medium" | "strong";

export default function StrengthBox({
  charactersLength,
  checkedOptions,
}: Props) {
  const [strength, setStrength] = useState<Strength>();

  const isStrong = () => {
    return parseInt(charactersLength) >= 16 && checkedOptions.length > 3;
  };

  const isMedium = () => {
    return parseInt(charactersLength) >= 10 && checkedOptions.length >= 3;
  };

  const isWeak = () => {
    return parseInt(charactersLength) >= 6 && checkedOptions.length >= 2;
  };

  useEffect(() => {
    if (isStrong()) return setStrength("strong");
    if (isMedium()) return setStrength("medium");
    if (isWeak()) return setStrength("weak");
    return setStrength("too weak!");
  }, [charactersLength, checkedOptions]);

  return (
    <div className="flex items-center justify-between p-4 bg-background w-full text-lg">
      <span className="opacity-60 font-bold ">STRENGTH</span>
      <div className="flex gap-4">
        <span className="font-bold uppercase">{strength}</span>
        <div className="flex gap-2">
          <div
            className={`w-3 ${
              strength === "strong"
                ? "bg-green"
                : strength === "medium"
                ? "bg-yellow"
                : strength === "weak"
                ? "bg-orange"
                : "bg-red"
            }`}
          />
          <div
            className={`w-3 ${
              strength === "strong"
                ? "bg-green"
                : strength === "medium"
                ? "bg-yellow"
                : strength === "weak"
                ? "bg-orange"
                : "border-2"
            }`}
          />
          <div
            className={`w-3 ${
              strength === "strong"
                ? "bg-green"
                : strength === "medium"
                ? "bg-yellow"
                : "border-2"
            }`}
          />
          <div
            className={`w-3 ${strength === "strong" ? "bg-green" : "border-2"}`}
          />
        </div>
      </div>
    </div>
  );
}
