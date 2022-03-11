module.exports = app => {
    const storyTime = require("../controllers/adventure.controller.js");

    var router = require("express").Router();

    router.post("/create", storyTime.createStory);
    router.post("/event", storyTime.createEvent);
    router.post("/action", storyTime.createAction);
    router.get("/", storyTime.findStory);
    router.get("/create", storyTime.findEvent);
    router.put("/:id", storyTime.update);
    router.delete("/:id", storyTime.delete);
    router.delete("/", storyTime.deleteAll);

    app.use('/api', router);
  };