import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

const removeRoom = async (id) => {
  const room = await db("rooms").where({ id }).first();

  if (!room) {
    throw new NotFoundError("Bunday element yo'q");
  }

  const result = await db("rooms").where({ id }).delete().returning("*");
  return result[0];
};

export default removeRoom;
