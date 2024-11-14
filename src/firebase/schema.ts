import { schema, Typesaurus } from "typesaurus";

export const db = schema(($) => ({
  challenges: $.collection<Challenge>(),
  responses: $.collection<ChallengeResponse>(),
  users: $.collection<User>(),
}));

export type Schema = Typesaurus.Schema<typeof db>;

export interface User {
  cid: string;
}

export interface Challenge {
  title: string;
  slug: string;
  description: string;
  difficulty: number;
  questions: Question[];
  questionCount: number;
  result: { score: number[]; title: string; feedback: string }[];
}

export interface ChallengeResponse {
  challenge: Challenge;
  completedAt: Typesaurus.ServerDate;
  score: number;
  answers: number[];
  user?: Schema["users"]["Id"];
}

export interface Question {
  difficulty: number;
  tag: string;
  question: string;
  context?: string;
  options: {
    key: string;
    text: string;
    correct: boolean;
    explanation: string;
  }[];
}
