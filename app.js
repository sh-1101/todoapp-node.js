const express = require("express");
const app = express();
const PORT = 5000;

app.listen(PORT, console.log("サーバーが起動しました"));

app.get("/api/v1/tasks", (req, res) => {
  res.send("タスクを全て取得しました");
});

app.post("/api/v1/tasks", (req, res) => {
  res.send("タスクを新規作成しました");
});

app.get("/api/v1/tasks/:id", (req, res) => {
  res.send("ある特定のタスクを取得しました");
});

app.patch("/api/v1/tasks/:id", (req, res) => {
  res.send("ある特定のタスクを更新しました");
});

app.delete("/api/v1/tasks/:id", (req, res) => {
  res.send("ある特定のタスクを削除しました");
});
