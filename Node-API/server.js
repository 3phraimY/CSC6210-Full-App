const express = require("express");
const app = express();
const port = 3000;
const playerRoutes = require("./routes/players");
const mongoose = require("mongoose");

// connect to online MongoDB
mongoose
  .connect(
    "mongodb+srv://ephraimyoung:sQnI2FOsA5B4RNA2@cluster0.zrl1l.mongodb.net/Packer_Team?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log("Example app listening on port" + port);
    });
  })
  .catch((err) => console.error("Failed to connect", err));

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/players", playerRoutes);
