import { readFileSync } from "fs";
import { join } from "path";
import roomList from "./room-list.js";
import showRoom from "./show-room.js";
import addRoom from "./add-room.js";
import editRoom from "./edit-room.js";
import removeRoom from "./remove-room.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "rooms", "_schema.gql"),
  "utf8"
);

const resolvers = {
  Query: {
    room: async (_, args) =>  await showRoom(args.id),
    rooms: async (_, args) => await roomList(args.input),
  },
  Mutation: {
    createRoom: async (_, args) =>await addRoom(args.input),
    updateRoom: async (_, args) => await editRoom({id:args.id,...args.input}),
    removeRoom: async (_, args) =>await removeRoom(args.id),
  },
};

export default { typeDefs, resolvers };
