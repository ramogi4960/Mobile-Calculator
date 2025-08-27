import { createContext } from "react";

interface GlobalState {
  input: string;
  setInput: (input: string) => void;
}

const globalState = createContext<GlobalState | null>(null);

export default globalState;