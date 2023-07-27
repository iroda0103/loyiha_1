import db from "../../db/index.js";

const editRoom = async ({ id, ...changes }) => {
  const room = await db("rooms").where({ id }).first();

  if (!room) {
    throw new Error("Bunday element yo'q");
  }

  const result = await db("rooms").where({ id }).update(changes).returning("*");

  return result[0];
};

export default editRoom;
