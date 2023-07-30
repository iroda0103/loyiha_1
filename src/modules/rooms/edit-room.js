import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.cjs";

const editRoom = async ({ id, ...changes }) => {
  const room = await db("rooms").where({ id }).first();

  if (!room) {
    throw new NotFoundError("Bunday element yo'q");
  }

  const result = await db("rooms").where({ id }).update(changes).returning("*");

  return result[0];
};

export default editRoom;
