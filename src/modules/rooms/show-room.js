import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

const showRoom = async (id) => {
  const room = await db("rooms").where({ id }).first();

  if (!room) {
    throw new NotFoundError("Bunday element yo'q");
  }

  return room;
};

export default showRoom;
