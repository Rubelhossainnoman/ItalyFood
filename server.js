/**
 * Get Express here...
 */
const express = require('express');
const path = require('path');
const env = require('dotenv').config();
const colors = require('colors');
const uc = require('upper-case');
const router = require('./router/pageRouter');
const expressLayouts = require('express-ejs-layouts');

/**
 * Get server port here...
 */
const port = process.env.SERVER_PORT || 4000;

/**
 * Express init....
 */
const app = express();

/**
 * Get from managment here....
 */
app.use(express.json());
app.use(express.urlencoded({extended : false}));

/**
 * EJS Init
 */
app.set('view engine', "ejs");
app.use(expressLayouts);
app.set('layout','layouts/app')

/**
 * Get using foulder here...
 */
app.use(express.static('public'))

/**
 * Get Routing here...
 */
app.use('/', router);

/**
 * Create Express server here....
 */
app.listen(port, () =>{
    console.log(uc.upperCase(`This server is running on port ${port}`).bgGreen.black);
})