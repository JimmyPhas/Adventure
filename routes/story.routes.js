module.exports = app => {
    const storyTime = require("../controllers/adventure.controller.js");

    var router = require("express").Router();

    router.post("/create", storyTime.createStory);
    router.get("/", storyTime.findAll);
    router.get("/published", storyTime.findAllPublished);
    router.get("/:id", storyTime.findOne);
    router.put("/:id", storyTime.update);
    router.delete("/:id", storyTime.delete);
    router.delete("/", storyTime.deleteAll);

    app.use('/api', router);
  };