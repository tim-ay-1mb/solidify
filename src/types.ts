export type Challenge = {
  title: string;
  slug: string;
  description: string;
  difficulty: number;
  questions: Question[];
  questionCount: number;
  result: { score: number[]; title: string; feedback: string }[];
};

export type ChallengeResponse = {
  challenge: Challenge;
  completedAt: number;
  score: number;
  answers: number[];
  user: string;
};

export type Question = {
  difficulty: number;
  tag: string;
  question: string;
  context?: string;
  options: {
    key: string;
    text: string;
    correct: boolean;
    explanation: string;
    count?: number;
  }[];
};

export type AuthUser = {
  uid: string;
  email: string;
  displayName: string;
  photoUrl: string;
  token: string;
};
