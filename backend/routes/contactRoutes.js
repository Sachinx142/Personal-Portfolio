const express = require("express")
const {submitContactForm} = require("../controller/contactController")

const router = express.Router()

// POST /api/contact
router.post('/contact', submitContactForm);

module.exports = router;