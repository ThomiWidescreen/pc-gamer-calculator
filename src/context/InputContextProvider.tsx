import { useState } from "react";
import { InputData } from "../interfaces/interfaces";
import { InputContext } from "./inputContext";

const INITIAL_STATE: InputData = {
  age: 14,
  heigth: 140,
  hairColor: "black",
  hairHeigth: "large",
  eyeColor: "black",
  boobSize: "small",
  physicalContext: "thin",
};

export default function inputContext({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [inputData, setInputData] = useState<InputData>(INITIAL_STATE);
  return (
    <InputContext.Provider value={{ inputData, setInputData }}>
      {children}
    </InputContext.Provider>
  );
}
