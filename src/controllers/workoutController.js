const workoutService = require("../services/workoutService");
// methods for each workout endpoint

// get all workouts
const getAllWorkouts = (req, res) => {
  //catch errors that might occur
  try {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({ status: "OK", data: allWorkouts });
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ status: "ERROR", message: err?.message });
  }
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
      .send({ status: "ERROR", message: "workoutId can't be empty" });
  }

  try {
    const workout = workoutService.getSingleWorkout(workoutId);
    res.send({ status: "OK", data: workout });
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ status: "ERROR", message: err?.message });
  }
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
    //if the workout is not valid, return an error
    return res.status(400).send({
      status: "ERROR",
      message:
        "Invalid workout, one of the keys is empty or missing in the request body:  'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
    });
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  //catch the errors that might occur
  try {
    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({ status: "OK", data: createdWorkout });
  } catch (err) {
    res
      .status(err?.status || 500)
      .send({ status: "ERROR", message: err?.message });
  }
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
      .send({ status: "ERROR", message: "workoutIdcan't be empty" });
  }

  try {
    const updatedWorkout = workoutService.updateSingleWorkout(workoutId, body);
    res.send({ status: "OK", data: updatedWorkout });
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ status: "ERROR", message: err?.message });
  }
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

  try {
    workoutService.deleteSingleWorkout(workoutId);
    res.send({ status: "OK" });
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ status: "ERROR", message: err?.message });
  }
};

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createNewWorkout,
  updateSingleWorkout,
  deleteSingleWorkout,
};
