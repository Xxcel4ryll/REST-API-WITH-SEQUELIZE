const express = require("express");
const router = express.Router();
const {
  fetchSingleMeal,
  fetchAllMeal,
  createMeal,
  deleteSingleMeal,
  updateMeal,
} = require("../controllers/base.controls");

router.get("/", fetchAllMeal);

router.get("/:id", fetchSingleMeal);

router.post("/food", createMeal);

router.put("/:id", updateMeal);

router.delete("/:id", deleteSingleMeal);

module.exports = router;
