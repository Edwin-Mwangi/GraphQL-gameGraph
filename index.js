// type=module allows us to use 'import' instead of 'require'
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from './schema.js';

//local db data
import db from './_db.js'

/* resolvers can take 3 args as query variables ie game(parent, args, context) 
    for unrequired args u use '_' ie game(_,args)
*/

//resolvers
const resolvers = {
    //type Query resolvers
    //func names must match toot query enntries ie games -> games
    Query: {
        games() {
            return db.games
        },
        //query variables for single item(game)
        game(_,args){
            return db.games.find( game => game.id === args.id)
        },
        authors() {
            return db.authors
        },
        author(_,args){
            return db.authors.find( author => author.id === args.id)
        },
        reviews() {
            return db.reviews
        },
        review(_,args){
            return db.reviews.find( review => review.id === args.id)
        }
    }
}

//server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4500 }
});

console.log('server ready at port', 4500);