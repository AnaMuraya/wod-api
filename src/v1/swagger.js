const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//Information about the API
const options = {
  //Definition of the API
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Workout API",
      version: "1.0.0",
      description: "API for managing workouts",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1/workouts",
        description: "Local server",
      }
    ]
  },
  apis: ["./src/v1/routes/*.js", "./src/database/Workout.js"]
};

//Docs in JSON format
const specs = swaggerJSDoc(options);

//Setup the docs
const docs = (app, port) => {
  //Handle route to the docs
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(specs));
  //Make available in JSON format
  app.get("/docs", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(specs);
  });
  console.log(
    `Version 1 docs available at http://localhost:${port}/api/v1/docs`
  );
};

module.exports = { docs };
