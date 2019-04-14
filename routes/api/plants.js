const router = require("express").Router();
const PlantsController = require("../../controllers/controllers");

// Matches with "/api/books"

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router
  .route("/")
  .get(PlantsController.findAll);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(PlantsController.findById)
  .put(PlantsController.update)
  .delete(PlantsController.remove);

module.exports = router;
