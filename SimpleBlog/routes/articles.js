const express = require("express");
const router = express.Router();
const Article = require("../models/article");

// GET all articles
router.get("/", async (req, res) => {
  try {
    // Create a query object to hold filtering criteria
    let query = {};

    // If there is a tags query parameter, filter articles by that tag
    if (req.query.tags) {
      query.tags = { $in: req.query.tags.split(",") };
    }

    // If there is a 'date' query parameter, filter articles by publishedDate
    if (req.query.date) {
      query.publishedDate = { $gte: new Date(req.query.date) };
    }

    // Find articles based on the query object
    const articles = await Article.find(query);

    //Return the filtered Articles
    res.json(articles);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET a single article
router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).send("Article not found");
    res.json(article);
  } catch (err) {
    res.status(500).send(err);
  }
});

// POST a new article
router.post("/", async (req, res) => {
  const article = new Article(req.body);
  try {
    await article.save();
    res.status(201).json(article);
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE an article
router.delete("/:id", async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) return res.status(404).send("Article not found");
    res.json({ message: "Article deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
});

// PUT (update) an article
router.put("/:id", async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!article) return res.status(404).send("Article not found");
    res.json(article);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
