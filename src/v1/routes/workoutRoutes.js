const express = require('express');
//importing our controller methods
const workoutController = require('../../controllers/workoutController');

const router = express.Router();

//defining the different endpoints
//getting all workouts
router.get('/', workoutController.getAllWorkouts);

//getting a single workout
router.get('/:id', workoutController.getSingleWorkout);

//creating a new workout
router.post('/', workoutController.createNewWorkout);

//updating a workout
router.put('/:id', workoutController.updateSingleWorkout);

//deleting a workout
router.delete('/:id', workoutController.deleteSingleWorkout);

module.exports = router;