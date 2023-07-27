import {makeExecutableSchema} from '@graphql-tools/schema';
import roomSchema from '../modules/rooms/_index.js'

const typeDefs=`#graphql
type Query{
    ping:String!
}
`
;
const resolvers={
    Query:{
        ping:()=>'Pong'
    }
}

const schema=makeExecutableSchema({
    typeDefs:[typeDefs,roomSchema.typeDefs],
    resolvers:[resolvers,roomSchema.resolvers],
})


export default schema
