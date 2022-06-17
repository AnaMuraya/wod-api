const express = require("express");
//importing our controller methods
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");

const router = express.Router();

//defining the different endpoints
//getting all workouts
router.get("/", workoutController.getAllWorkouts);

//getting a single workout
router.get("/:workoutId", workoutController.getSingleWorkout);

//getting all records for a single workout
router.get("/:workoutId/records", recordController.getRecordForWorkout);

//creating a new workout
router.post("/", workoutController.createNewWorkout);

//updating a workout
router.put("/:workoutId", workoutController.updateSingleWorkout);

//deleting a workout
router.delete("/:workoutId", workoutController.deleteSingleWorkout);

module.exports = router;
