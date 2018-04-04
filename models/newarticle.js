const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newArticleSchema = new Schema({
  title: { type: String },
  author: { type: String },
  synopsis: { type: String },
  url: { type: String },
});

const NewArticle = mongoose.model("NewArticle", newArticleSchema);

module.exports = NewArticle;
