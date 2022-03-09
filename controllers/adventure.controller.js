const db = require("../models");
const Story = db.stories;
const Event = db.events;
const Action = db.actions;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  
    if (req.body.title) {
      
    const story = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };

    Story.create(story)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Story."
        });
      });

      return;
    }
    else if (req.body.event_text) {

      const event = {
        event_text: req.body.event_text,
        for_story: req.body.for_story,
        intro: req.body.intro ? req.body.intro : false
      };

      Event.create(event)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occured while creating the story event."
          });
        });

      return;
    }
    else if (req.body.action_text) {

      const action = {
        action_text: req.body.action_text,
        action_of: req.body.action_of,
        result_text: req.body.result_text
      };

      Action.create(action)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occured while creating the story action."
          });
        });

        return;
    }
    else {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  };
  
  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Story.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving stories."
        });
      });
  };
  
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Story.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Story with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Story with id=" + id
        });
      });
  };
  
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Story.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Story was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Story with id=${id}. Maybe Story was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Story with id=" + id
        });
      });
  };
  
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Story.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Story was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Story with id=${id}. Maybe Story was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Story with id=" + id
        });
      });
  };
  
  exports.deleteAll = (req, res) => {
    Story.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Stories were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all stories."
        });
      });
  };
  
  exports.findAllPublished = (req, res) => {
    Story.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving stories."
        });
      });
  }