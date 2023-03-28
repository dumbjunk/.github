const express = require("express");
const { join } = require("path");

const app = express();

app.get("/", (req, res) => {
	res.status(200).sendFile(join(__dirname, "../assets", `joe-${Math.floor(Math.random() * 4)}.png`));
});

app.listen(3000);