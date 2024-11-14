import "~/firebaseAdmin";
import { Challenge, db } from "~/firebase/schema";
import data from "~/data/challenges";

export const GET = async () => {
  await db.challenges
    .all()
    .then((challenges) => challenges.forEach((x) => x.remove()));
  for (const challenge of data as Challenge[]) {
    await db.challenges.add(challenge);
  }
  return new Response("OK");
};
