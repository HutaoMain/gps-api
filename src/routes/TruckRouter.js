const router = require("express").Router();
const TruckController = require("../controllers/TruckController");

router.post("/create", TruckController.createTruck);

router.get("/:id", TruckController.getTruckById);

router.get("/", TruckController.getTruckList);

module.exports = router;
