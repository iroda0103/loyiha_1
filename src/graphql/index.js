import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import schema from "./schema.js";
import { expressMiddleware } from "@apollo/server/express4";
import jwt from "jsonwebtoken";
import config from "../shared/config/index.js";

export const buildGraphqlServer = function (httpServer) {

  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
  });

  const serverMiddleware = () =>
    expressMiddleware(server, {
      context: ({ req }) => {
        const token = req.headers.authorization;
        
        if (token) {
          const decoded = jwt.verify(token, config.jwt.secret);
          return { user: decoded.user };
        }

        return { user: {} };
      },
    });
  return { server, serverMiddleware };
};