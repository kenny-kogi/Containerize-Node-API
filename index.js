const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Kenny",
      email: "mwangiken497@gmail.com",
    },
    {
      id: 2,
      name: "iraki",
      email: "iraki497@gmail.com",
    },
    {
      id: 3,
      name: "Emily",
      email: "Emily497@gmail.com",
    },
    {
      id: 4,
      name: "Edyy",
      email: "Eddy367@gmail.com",
    },
  ]);
});

app.listen(port, () => {
  console.log("Server is running");
});
