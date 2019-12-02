const express = require("express");
const path = require('path');
const router = require('./router')

const app = express();

app.use(express.json());
app.use('/', router);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;
