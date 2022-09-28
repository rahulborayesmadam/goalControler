const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  upDateGoals,
  deleteGoals,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoal);

router.route("/:id").put(upDateGoals).delete(deleteGoals);

module.exports = router;
