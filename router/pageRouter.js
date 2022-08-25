/**
 * Get express here..again...
 */
const express = require('express');
const path = require('path');
const contactForm = require('../controllers/helperController');
const { showHomePage,showArchivePage,showGalleryPage,showLocationPage,showMenuPage,showNewsPage,showReservationPage,showStaffPage} = require('../controllers/pageControllers');

/**
 * Get router from express here...
 */
const router = express.Router();

/**
 * Create routing system here...
 */
router.get('/', showHomePage);
router.get('/archive', showArchivePage);
router.get('/gallery', showGalleryPage);
router.get('/location', showLocationPage);
router.get('/menu', showMenuPage);
router.get('/news', showNewsPage);
router.get('/reservation', showReservationPage);
router.get('/staff', showStaffPage);
router.post('/done', contactForm);

/**
 * Export router system here...
 */
module.exports = router;