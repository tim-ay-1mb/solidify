import { ChallengeResponse } from "~/types";
import { db } from "../firebase/schema";
import { action } from "@solidjs/router";

const submitResponse = action(
  async ({
    challenge,
    answers,
    user,
  }: Omit<ChallengeResponse, "completedAt" | "score">) => {
    "use server";

    const userId = await db.users.id(user);

    const score = answers.reduce(
      (sum, answer, index) =>
        challenge.questions[index]!.options[answer]!.correct ? sum + 1 : sum,
      0
    );
    const response = await db.responses.add(($) => ({
      challenge,
      completedAt: $.serverDate(),
      score: score,
      answers,
      user: userId,
    }));
    return { id: response.id };
  },
  "submitResponse"
);

export default submitResponse;
