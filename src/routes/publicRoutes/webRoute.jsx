const express = require("express");

const router = express.Router();

const { getHomePage } = require("../controllers/webController");

// Home
router.get("/", getHomePage);

module.exports = router;
