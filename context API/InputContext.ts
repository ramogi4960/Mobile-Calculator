import { createContext } from "react";


interface InputContextType {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

export const InputContext = createContext<InputContextType | undefined>(undefined);