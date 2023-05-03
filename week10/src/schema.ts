const typeDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.


type Person {
    id: ID
    name: String
    age: Int
    address: Address
}

type Address{
    id: ID
    address: String!    
    city: String!
    person: [Person]
}

type Query {
    person: [Person!]
    address: [Address!]
}

type combinedID{
    personId: ID!
    addressId: ID!
}

input inputPerson {
    name: String
    age: Int
}

input inputAddress {
    address: String!
    city: String!
}

type Mutation {
    addPerson(input: inputPerson): Person!
    deletePerson(id: ID!): Person!
    updatePerson(id: ID!, input: inputPerson): Person!
    addAddress(input: inputAddress!): Address!
    deleteAddress(id: ID!): Address!
    updateAddress(id: ID!, input: inputAddress!): Address!
    addAddressToPerson(personId: ID!, addressId: ID!): Person!
    findPersonOnAddress(id: ID!): [Person!]
}
`;

export default typeDefs;