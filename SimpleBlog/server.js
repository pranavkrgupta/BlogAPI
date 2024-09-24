const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const articleRoutes = require("./routes/articles");

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/articles", articleRoutes);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(3000, () => console.log("Server running on port 3000"))
  )
  .catch((err) => console.error(err));
