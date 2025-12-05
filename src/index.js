const express = require("express");
const postRoutes = require("./routes/post.routes.js");

const app = express();

app.use(express.json());

app.use("/api/v1/posts", postRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Blogify API is running" });
});
