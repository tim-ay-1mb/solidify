import "~/firebaseAdmin";
import { Challenge, db } from "~/firebase/schema";
import data from "~/data/challenges";

export const GET = async () => {
  const challenges = await db.challenges.all();
  for (const challenge of data as Challenge[]) {
    if (challenges.find((c) => c.data.slug === challenge.slug)) continue;
    await db.challenges.add(challenge);
  }
  return new Response("OK");
};
