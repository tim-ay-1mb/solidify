import { db } from "../firebase/schema";

const getChallenge = async (slug: string) => {
  "use server";
  const challenges = await db.challenges.query(($) => $.field("slug").eq(slug));

  if (challenges.length === 0) {
    throw new Error("Challenge not found");
  }
  const { ...challenge } = challenges[0]!.data;

  challenge.questions.forEach(({ options, ...question }, index) => {
    return {
      question,
      options: options.map(({ explanation, correct, ...option }) => option),
    };
  });
  return challenge;
};

export default getChallenge;
