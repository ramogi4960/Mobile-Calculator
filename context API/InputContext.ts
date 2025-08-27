import { createContext } from "react";


interface InputContextType {
  displayValue: string;
  setDisplayValue: React.Dispatch<React.SetStateAction<string>>;
  previousValue: string | null;
  setPreviousValue: React.Dispatch<React.SetStateAction<string | null>>;
  operation: string | null;
  setOperation: React.Dispatch<React.SetStateAction<string | null>>;
  waitingForOperand: boolean;
  setWaitingForOperand: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InputContext = createContext<InputContextType | undefined>(undefined);