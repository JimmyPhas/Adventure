module.exports = app => {
    const stories = require("../controllers/adventure.controller.js");

    var router = require("express").Router();

    // Create a new story
    router.post("/", stories.create);
    // Retrieve all story
    router.get("/", stories.findAll);
    // Retrieve all published story
    router.get("/published", stories.findAllPublished);
    // Retrieve a single story with id
    router.get("/:id", stories.findOne);
    // Update a story with id
    router.put("/:id", stories.update);
    // Delete a story with id
    router.delete("/:id", stories.delete);
    // Delete all stories
    router.delete("/", stories.deleteAll);

    app.use('/api', router);
  };