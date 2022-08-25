/**
 * Get fs module here...
 */
const { json } = require('express');
const {readFileSync} = require('fs');

/**
 * Get Path module here...
 */
const path = require('path');

/**
 * Create routing system here...
 */

/**
 * Show home page by ejs
 */
const showHomePage = (req,res) =>{
    res.render('index');
};
/**
 * Show archive page by ejs
 */
const showArchivePage = (req,res) =>{
    res.render('archive');
};

/**
 * Show Gallery page by ejs
 */
const showGalleryPage = (req,res) =>{
    res.render('gallery');
};

/**
 * Show location page by ejs
 */
const showLocationPage = (req,res) =>{
    res.render('location');
};

/**
 * Show menu page by ejs
 */
const showMenuPage = (req,res) =>{
    res.render('menu');
};

/**
 * Show news page by ejs
 */
const showNewsPage = (req,res) =>{
    res.render('news');
};

/**
 * Show reservation page by ejs
 */
const showReservationPage = (req,res) =>{
    res.render('reservation');
};

/**
 * Show staff page by ejs
 */
const showStaffPage = (req,res) =>{
    const staf = readFileSync(path.join(__dirname,'../db/staff.json'));
    res.render('staff',{
        test : JSON.parse(staf.toString())
    });
};

/**
 * Export module here...
 */
module.exports = {
    showHomePage,
    showArchivePage,
    showGalleryPage,
    showLocationPage,
    showMenuPage,showNewsPage,showReservationPage,showStaffPage
};