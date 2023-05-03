const typeDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.


type Person {
    id: ID!
    name: String!
    age: String!
    address: Address
}

type Address{
    address: String!    
    city: String!
    person: Person!
}

type Query {
    person: [Person!]
    address: [Address!]
}

type Mutation {
    addPerson(name: String!, age: Int!, city: String!): Person!
    deletePerson(id: ID!): Person!
    updatePerson(id: ID!, name: String!, age: Int!, city: String!): Person!
    addAddress(address: String!, city: String!): Address!
    deleteAddress(id: ID!): Address!
    updateAddress(id: ID!, address: String!, city: String!): Address!
}
`;

export default typeDefs;