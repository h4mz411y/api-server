'use strict';
require('dotenv').config();
const server = require('./src/server');
let PORT = process.env.PORT || 3000;
// the PORT will be in the .env file or using the 3000 PORT

const { db } = require("./src/models/index");
db.sync()
    .then(() => {
        server.start(PORT);
    })
    .catch(console.error);