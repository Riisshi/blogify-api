const express = require("express");
const { getAllPosts } = require("../controllers/post.controller.js");

const router = express.Router();

router.get("/", getAllPosts);

module.exports = router;
