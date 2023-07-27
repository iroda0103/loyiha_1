import db from "../../db/index.js";

const showRoom = async (id) => {
  const room = await db("rooms").where({ id }).first();

  if (!room) {
    throw new Error("Bunday element yo'q");
  }

  return room;
};

export default showRoom;
