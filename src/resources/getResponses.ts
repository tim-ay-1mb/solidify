import admin from "~/firebaseAdmin";
import { db } from "../firebase/schema";

const getResponses = async () => {
  "use server";
  const _responses = await db.responses.query(($) => [
    $.field("completedAt").order("desc"),
    $.limit(25),
  ]);

  return await Promise.all(
    _responses.map(async ({ data: response }) => {
      return {
        ...response,
        userDisplayName: await admin
          .auth()
          .getUser(response?.user ?? "")
          .then((user) => user.displayName ?? "Anonymous")
          .catch(() => "Anonymous"),
      };
    })
  );
};

export default getResponses;
