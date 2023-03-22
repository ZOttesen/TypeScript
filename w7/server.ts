import app from './app';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
const { ServerApiVersion } = require('mongodb');

dotenv.config();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

const credentials = './X509-cert-1310350508903869209.pem';
mongoose.connect('mongodb+srv://cluster0.gossr64.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
  sslKey: credentials,
  sslCert: credentials,
  serverApi: ServerApiVersion.v1
})