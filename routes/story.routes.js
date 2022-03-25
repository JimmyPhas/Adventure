module.exports = app => {
    const storyTime = require("../controllers/adventure.controller.js");

    var router = require("express").Router();

    router.post("/create", storyTime.createStory);
    router.post("/event", storyTime.createEvent);
    router.post("/action", storyTime.createAction);
    router.get("/storylist", storyTime.findAllStories);
    router.get("/details/:id", storyTime.findOneStory);
    router.get("/create", storyTime.findStory);
    router.put("/:id", storyTime.update);
    router.delete("/:id", storyTime.delete);
    router.delete("/", storyTime.deleteAll);

    app.use('/api', router);
  };