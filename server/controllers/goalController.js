const asyncHandler = require("express-async-handler");
// @desc Get goals
// @routes GET/api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// @desc Set goal
// @routes Post/api/goals
// @access Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  } else {
    res.status(200).json({ message: "Set goals" });
  }
});

// @desc Update goal
// @routes put/api/goals:id
// @access Private

const upDateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
});

// @desc Delete goal
// @routes delete/api/goalsL:id
// @access Private

const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted Goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  upDateGoals,
  deleteGoals,
};
