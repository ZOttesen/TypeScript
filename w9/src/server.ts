import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import typeDefs from './schema';
import resolvers from './resolvers/personResolver';
import mongoose from 'mongoose';
const { ServerApiVersion } = require('mongodb');

interface MyContext {
    token?: String;
}

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => ({ token: req.headers.token }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const  serverstart = async () => {
    await server.start();
    server.applyMiddleware({ app });
    await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

serverstart();


const credentials = './X509-cert-1310350508903869209.pem';
mongoose.connect('mongodb+srv://cluster0.gossr64.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
    sslKey: credentials,
    sslCert: credentials,
    serverApi: ServerApiVersion.v1
}).then(() => {
    console.log('Connected to MongoDB');
})
