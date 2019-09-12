const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const itemsRoutes = require("./routes/api/items");

//create express
const app = express();

//use bodyParser middleware
app.use(bodyParser.json());

//use router
app.use("/routes/api/items", itemsRoutes);

//create DB connection
const db = require("./config/keys").mongoURI;

//connect to DB
mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB connected.....");
  })
  .catch(e => {
    console.log(e);
  });

//create a port
const port = process.env.PORT || 5000;

//listen to the port

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
