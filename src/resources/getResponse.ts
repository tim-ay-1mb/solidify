import { db } from "../firebase/schema";

const getResponse = async (id: string) => {
  "use server";
  const response = await db.responses.get(db.responses.id(id));

  if (!response?.data) {
    throw new Error("Response not found");
  }

  return response?.data!;
};

export default getResponse;
