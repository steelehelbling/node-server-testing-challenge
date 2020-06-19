const express = require("express");

const users = require("./serverModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

server.get("/users", (req, res) => {
    users.getAll()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(500).json(error.message);
        });
});

server.post("/users", (req, res) => {
    users.insert(req.body)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error.message);
        });
});


  server.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    users.remove(id)
    .then((user) => {
        if (!user) {
          res.status(404).json({
            message: "The user with the specified ID does not exist.",
          });
        } else {
          res.status(200).json(user);
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
        res.status(500).json({ errorMessage: "The user could not be removed" });
      });
  });

module.exports = server;