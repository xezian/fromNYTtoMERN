import axios from "axios";

export default {
  // Retrieve new aricles to the page
  retrieveNewArticles: function(requestParams) {
    console.log(requestParams);
    return axios.post("api/articles/retrieve", requestParams);
  },
  // Gets all stored articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the stored article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
