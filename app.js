const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const PORT = 5000;

app.use("/api/v1/tasks", taskRoute);

app.listen(PORT, console.log("サーバーが起動しました"));
