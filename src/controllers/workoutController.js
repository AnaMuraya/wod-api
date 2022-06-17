const workoutService = require("../services/workoutService");
// methods for each workout endpoint

// get all workouts
const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts });
};

// get a single workout
const getSingleWorkout = (req, res) => {
  // get the workout id from the url
  const {
    params: { workoutId },
  } = req;

  //if the workout id is not valid, return an error
  if (!workoutId) {
    return res
      .status(400)
      .send({ status: "ERROR", message: "Invalid workout id" });
  }

  const workout = workoutService.getSingleWorkout(workoutId);
  res.send({ status: "OK", data: workout });
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
    trainerTips: body.trainerTips,
  };

  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({ status: "OK", data: createdWorkout });
};

// update a workout
const updateSingleWorkout = (req, res) => {
  // get the workout id from the url and the updated workout from the body
  const {
    params: { workoutId },
    body,
  } = req;
  //if the workout id is not valid, return an error
  if (!workoutId) {
    return res
      .status(400)
      .send({ status: "ERROR", message: "Invalid workout id" });
  }

  const updatedWorkout = workoutService.updateSingleWorkout(workoutId, body);
  res.send({ status: "OK", data: updatedWorkout });
};

// delete a workout
const deleteSingleWorkout = (req, res) => {
  // get the workout id from the url
  const {
    params: { workoutId },
  } = req;
  //if the workout id is not valid, return an error
  if (!workoutId) {
    return res
      .status(400)
      .send({ status: "ERROR", message: "Invalid workout id" });
  }

  workoutService.deleteSingleWorkout(workoutId);
  res.send({ status: "OK" });
};

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createNewWorkout,
  updateSingleWorkout,
  deleteSingleWorkout,
};
