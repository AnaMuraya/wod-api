const { v4: uuidv4 } = require("uuid");
const Workout = require("../database/Workout");

//get all workouts
const getAllWorkouts = () => {
  try {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
  } catch (err) {
    throw err;
  }
};
//get a single workout
const getSingleWorkout = (workoutId) => {
  try {
    const workout = Workout.getSingleWorkout(workoutId);
    return workout;
  } catch (err) {
    throw err;
  }
};
//create a new workout
const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuidv4(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  //insert the workout into the database and handle errors
  try {
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
  } catch (err) {
    throw err;
  }
};

//update a workout
const updateSingleWorkout = (workoutId, workoutChanges) => {
  try {
    const workoutToUpdate = Workout.updateSingleWorkout(
      workoutId,
      workoutChanges
    );
    return workoutToUpdate;
  } catch (err) {
    throw err;
  }
};

//delete a workout
const deleteSingleWorkout = (workoutId) => {
  try {
    Workout.deleteSingleWorkout(workoutId);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createNewWorkout,
  updateSingleWorkout,
  deleteSingleWorkout,
};
