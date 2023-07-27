import db from "../../db/index.js";

const addRoom = async (data) => {
  const a = await db("rooms").where({ name: data.name }).first();

  if (a) {
    throw new Error("Bunday element bor");
  }

  const result = await db("rooms").insert(data).returning("*");
  return result[0];
};

export default addRoom;
