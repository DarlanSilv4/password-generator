import { ReactComponent as CheckboxBlankSvg } from "../assets/checkbox_blank.svg";
import { ReactComponent as CheckboxDoneSvg } from "../assets/checkbox_done.svg";

interface Props {
  options: string[];
  setOptions: React.Dispatch<React.SetStateAction<string[]>>;
}

interface CheckboxProps {
  children: string;
  value: string;
}

export default function CharacterOptions({ options, setOptions }: Props) {
  const removeItemFromArray = (item: string, array: string[]) => {
    const index = array.indexOf(item);
    if (index < 0) return array;

    const arrayCopy = [...array];
    arrayCopy.splice(index, 1);
    return arrayCopy;
  };

  const isChecked = (value: string) => {
    return options.includes(value);
  };

  const handleOnChange = (value: string) => {
    if (options.includes(value)) {
      const ArrayWithoutItem = removeItemFromArray(value, options);
      setOptions(ArrayWithoutItem);
      return;
    }

    const ArrayWithNewItem = [...options, value];
    setOptions(ArrayWithNewItem);
  };

  const Checkbox = ({ children, value }: CheckboxProps) => {
    return (
      <label className="flex gap-4 cursor-pointer">
        <input
          className="hidden"
          type="checkbox"
          value={value}
          checked={options.includes(value)}
          onChange={(e) => {
            const { value } = e.currentTarget;
            handleOnChange(value);
          }}
        />
        {isChecked(value) ? (
          <CheckboxDoneSvg className="text-green" />
        ) : (
          <CheckboxBlankSvg className="text-white hover:text-green" />
        )}
        {children}
      </label>
    );
  };

  return (
    <div className="flex gap-2 flex-col items-start w-full my-4">
      <Checkbox value="uppercase">Include Uppercase Letters</Checkbox>
      <Checkbox value="lowercase">Include Lowercase Letters</Checkbox>
      <Checkbox value="numbers">Include Numbers</Checkbox>
      <Checkbox value="symbols">Include Symbols</Checkbox>
    </div>
  );
}
