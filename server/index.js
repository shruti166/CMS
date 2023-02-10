const multer = require("multer");
const express = require("express");
const connect = require("./config/db.js");
const path = require("path");
const postRoute = require("./Routes/postRouter");
const userRouter = require("./Routes/userRouter");
const app = express();


app.get("*", (req, res) => {
  try {
    app.use(express.static(path.resolve(__dirname, "client", "build")));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  } catch (e) {
    res.send("Welcome to CMS");
  }
});

app.use(express.json());

const port = 8000;
connect();
const storage = multer.diskStorage({
  destination: (req, file, callbackFn) => {
    callbackFn(null, "images");
  },
  filename: (req, file, callbackFn) => {
    callbackFn(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.send({
    status: true,
    message: "File has been uploaded",
  });
});

app.use("/users", userRouter);
app.use("/posts", postRoute);
app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
