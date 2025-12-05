function getAllPosts(req, res) {
  res.status(200).json({ message: 'All posts fetched successfully' });
}

module.exports = { getAllPosts };
