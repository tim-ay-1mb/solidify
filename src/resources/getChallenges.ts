import { query } from "@solidjs/router";
import { db } from "../firebase/schema";

const getChallenges = query(async () => {
  "use server";

  const challenges = await db.challenges.all();

  return challenges.map(({ data: { questions, ...challenge } }) => challenge);
}, "challenges");

export default getChallenges;
