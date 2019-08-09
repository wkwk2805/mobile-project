const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

const user = {
  email: "a@naver.com",
  password: "1234"
};

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
