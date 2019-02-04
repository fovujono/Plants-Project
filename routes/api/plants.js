const router = require("express").Router();
const PlantsController = require("../../controllers/controllers");

// Matches with "/api/books"
router.route("/")
  .get(PlantsController.findAll)
  .post(PlantsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(PlantsController.findById)
  .put(PlantsController.update)
  .delete(PlantsController.remove);

module.exports = router;
