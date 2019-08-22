const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const pool = require("./database");
const dml = require("./dml")(pool);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.put("/userinfo", (req, res) => {
  dml.insertUserInfo(req, res);
});

app.patch("/userinfo", (req, res) => {
  dml.updateUserInfo(req, res);
});

app.post("/", (req, res) => {
  const { email, password } = req.body;
  if (email === user.email && password === user.password) {
    res.json({ result: true });
  } else {
    res.json({ result: false });
  }
});

app.listen(3000, () => {
  console.log("Connect Server 3000port");
});
