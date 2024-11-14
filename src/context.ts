import { Accessor, createContext, Setter } from "solid-js";
import { SetStoreFunction } from "solid-js/store";
import getChallenge from "./resources/getChallenge";
import { AuthUser } from "./types";

export const PanelContext = createContext<{
  answers: number[];
  setAnswers: SetStoreFunction<number[]>;
  challenge: Accessor<Awaited<ReturnType<typeof getChallenge>>>;
  currIndex: Accessor<number>;
  setCurrIndex: Setter<number>;
  scrollToQuestion: (index: number) => void;
  showAnswer: boolean;
}>();

export const AuthUserContext = createContext<{
  user: Accessor<AuthUser | undefined>;
}>();
