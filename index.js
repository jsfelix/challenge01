const express = require("express");

const server = express();

server.use(express.json());

const projects = [];

// List projects
server.get("/projects", (req, res) => {
  return res.json(projects);
});

// Create a project
server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(project);
});

// Update title project
server.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);
  project.title = title;

  return res.json(project);
});

server.listen(3000);
