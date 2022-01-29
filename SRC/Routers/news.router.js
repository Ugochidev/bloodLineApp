const express = require("express");
// const { append } = require("express/lib/response");
const News = require("../Controllers/news.controller");

const NewsRouter = express.Router();

NewsRouter.post('/add-new',News.addNews);

module.exports = NewsRouter;