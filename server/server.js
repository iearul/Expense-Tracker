const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config({ path: "./config.env" });

const port = process.env.PORT || 3002;
//6vHd0hstXn7Hxhke

// use middleware
app.use(cors());
app.use(express.json());

//mongodb connection
const con = require("./db/connection.js");

//using routes
app.use(require('./routes/route'));

con.then(db => {
    if (!db) return process.exit(1);

    //listen to http server
    app.listen(port, function (err) {
        if (err) console.log(err);
        console.log("Server listening on port", port);
    });

    app.on('error', err => console.log(`Failed to connect HTTP Server: ${err}`));
}).catch(error => {
    console.log(`Connection Failed! ${error}`);
})

