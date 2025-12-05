const Post = require('../models/post.model');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({
      success: true,
      data: posts
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const id = req.params.id;

    // If ID is invalid, skip Mongoose and return null
    if (!id || id.length !== 24) {
      return res.status(200).json({
        success: true,
        data: null
      });
    }

    const post = await Post.findById(id);

    return res.status(200).json({
      success: true,
      data: post || null
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
};
