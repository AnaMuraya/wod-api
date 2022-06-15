const workoutService = require("../services/workoutService");
// methods for each workout endpoint

// get all workouts
const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts });
};

// get a single workout
const getSingleWorkout = (req, res) => {
  const workout = workoutService.getSingleWorkout();
  res.send(`<h3>Hello from this workout!</h3>`);
};

// create a new workout
const createNewWorkout = (req, res) => {
  const { body } = req;

  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips
  }

  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({ status: "OK", data: createdWorkout });
};

// update a workout
const updateSingleWorkout = (req, res) => {
  const updatedWorkout = workoutService.updateSingleWorkout();
  res.send(`<h3>Updating existing workout!</h3>`);
};

// delete a workout
const deleteSingleWorkout = (req, res) => {
  const deletedWorkout = workoutService.deleteSingleWorkout();
  res.send(`<h3>Deleting an existing workout!</h3>`);
};

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createNewWorkout,
  updateSingleWorkout,
  deleteSingleWorkout,
};
