import db from "../../db/index.js";

const removeRoom = async (id) => {
  const room = await db("rooms").where({ id }).first();

  if (!room) {
    throw new Error("Bunday element yo'q");
  }

  const result = await db("rooms").where({ id }).delete().returning("*");
  return result[0];
};

export default removeRoom;
