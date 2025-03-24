require("dotenv").config();
const express = require("express");
const configViewsEngine = require("./config/viewEngine.config");
const cors = require("cors");

const app = express();

// Config req.body
app.use(express.json());
app.use(express.urlencoded());

// Config views engine
configViewsEngine(app);

// Database setup
const connection = require("./config/db.config");

// CORS
app.use(cors);

// Web Routes
const webRoutes = require("./routes/publicRoutes/webRoute");
app.get("/", webRoutes);

// Start server
app.listen(
  (port) => {
    console.log(`Server is running on port ${port}`);
    connection
      .getConnection()
      .then(() => {
        console.log("Connected to the database");
      })
      .catch((err) => {
        console.log("Error connecting to the database", err);
      });
  },
  (error) => {}
);
