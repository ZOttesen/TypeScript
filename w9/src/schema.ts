const typeDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.


type Person {
    id: ID!
    name: String!
    age: String!
    city: String!
}

type HalfPerson{
    name: String!
    age: String!
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
# The "books" query accepts an optional "author" argument of type String. And returns a list always (even if it's empty). Never null. And content will allways be a Book object or empty. never null.
type Query {
    person: [Person!]
    halfPerson: [HalfPerson!]
}

type Mutation {
    addPerson(name: String!, age: Int!, city: String!): Person!
    deletePerson(id: ID!): Person!
    updatePerson(id: ID!, name: String!, age: Int!, city: String!): Person!
}
`;

export default typeDefs;