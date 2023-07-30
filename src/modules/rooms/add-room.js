import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

const addRoom = async (data) => {
  const a = await db("rooms").where({ name: data.name }).first();

  if (a) {
    throw new NotFoundError("Bunday element bor");
  }

  const result = await db("rooms").insert(data).returning("*");
  return result[0];
};

export default addRoom;
