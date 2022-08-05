import { createContext } from "react";
import { InputData } from "../interfaces/interfaces";

interface InputContextProps {
  inputData: InputData;
  setInputData: React.Dispatch<React.SetStateAction<InputData>>;
}

export const InputContext = createContext<InputContextProps>(
  {} as InputContextProps
);
