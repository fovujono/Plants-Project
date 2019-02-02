const router = require("express").Router();
const PlantsController = require("../../controllers/controllers");

// Matches with "/api/books"
router.route("/")
  .get(PlantsController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(PlantsController.findById)
  .put(Plants.update)
  .delete(PlantsController.remove);

module.exports = router;
