const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    hello(name: String): String
    todo(task: String, times: Int): String
  }
`

const resolvers = {
  Query: {
    hello: (_, args) => `Hello ${args.name ||'World'}!`,
    todo: (_,args) => `You must ${args.task} ${args.times} times a day`,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log(`Server is running at http://localhost:4000`))
