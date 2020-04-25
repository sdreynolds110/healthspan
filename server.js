const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/api");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static(path.join(_dirname, "/client/build")));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connects mongoDB
const MONGODB_URI = "mongodb+srv://sdreynolds110:Hermkicker91@healthrecord-6zde7.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/healthrecord",
  { useUnifiedTopology: true, useNewUrlParser: true }
);
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
})
app.use(express).json();
app.use(express.urlencoded({ extended: false}));

// Define API routes here
app.use("/api", routes);


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(cors());

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
