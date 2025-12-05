const express = require("express");
const { getAllPosts, getPostById } = require("../controllers/post.controller.js");

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPostById);

module.exports = router;
