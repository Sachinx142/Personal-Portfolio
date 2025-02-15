const express = require("express");
const { subscribe } = require("../controller/subscribeController");

const router = express.Router();

// POST /api/subscribe
router.post("/subscribe", subscribe);

module.exports = router;
