import db from "../../db/index.js";

const roomList = async (data={}) => {
  const { q='', filters = {}, sort, page = { offset: 0, limit: 4 } } = data;

  const orderBy = sort
    ? Object.values(sort).map((elem) => elem.toLowerCase())
    : ["id", "asc"];

  let rooms = db("rooms")
    .where(filters)
    .limit(page.limit)
    .offset(page.offset)
    .orderBy(...orderBy);

  if (q) {
    rooms.whereILike("name", `%${q}%`);
  }

  const total = await db("rooms")
    .where(filters)
    .count();

  rooms = await rooms;

  const obj = {
    list: rooms,
    offset: page.offset,
    limit: page.limit,
    total: total[0].count,
  };

  return obj;
};

export default roomList;
