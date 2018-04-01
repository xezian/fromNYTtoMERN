const router = require("express").Router();
const articleController = require("../../controllers/articleController");
const retrieve = require("./newyorktimes");

// Matches with "api/articles/scrape"
router.route("/retrieve")
  .get(retrieve);

// Matches with "/api/articles"
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;
