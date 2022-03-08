module.exports = app => {
    const storyTime = require("../controllers/adventure.controller.js");

    var router = require("express").Router();

    // Create a new story
    router.post("/", storyTime.create);
    // Retrieve all story
    router.get("/", storyTime.findAll);
    // Retrieve all published story
    router.get("/published", storyTime.findAllPublished);
    // Retrieve a single story with id
    router.get("/:id", storyTime.findOne);
    // Update a story with id
    router.put("/:id", storyTime.update);
    // Delete a story with id
    router.delete("/:id", storyTime.delete);
    // Delete all stories
    router.delete("/", storyTime.deleteAll);

    app.use('/api', router);
  };