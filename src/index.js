const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const postRoutes = require("./routes/post.routes.js");

dotenv.config();        // Load .env
connectDB();            // Connect to MongoDB

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
