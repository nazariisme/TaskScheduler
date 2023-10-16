"use strict";

const express = require('express');
const indexRoutes = require('./routes/routes.js');
const port = 1337;
const app = express();
const morgan = require('morgan');


// eslint-disable-next-line no-global-assign
//Uses the css code
app.use(express.static("public"));
//Template motor
app.set("view engine", "ejs");

//Post request handler
app.use(express.urlencoded({extended: true}));

app.use(morgan('dev'));

morgan.token('host', function(req) {return req.hostname;});


//Request details
app.use((req, res, next) => {
    console.log(`Got a request on: ${req.path} with method ${req.method}`);
    next();
});

//Uses routes
app.use("/", indexRoutes);

//Sets the port
app.listen(port, () => {
    console.log(`Server is listening at port ${port}\n`);
});



