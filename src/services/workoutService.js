const { v4: uuidv4 } = require("uuid");
const Workout = require("../database/Workout");

//get all workouts
const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};
//get a single workout
const getSingleWorkout = (workoutId) => {
  const workout = Workout.getSingleWorkout(workoutId);
  return workout;
};
//create a new workout
const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuidv4(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  const createdWorkout = Workout.createNewWorkout(workoutToInsert);

  return createdWorkout;
};

//update a workout
const updateSingleWorkout = (workoutId, workoutChanges) => {
  const workoutToUpdate = Workout.updateSingleWorkout(
    workoutId,
    workoutChanges
  );
  return workoutToUpdate;
};

//delete a workout
const deleteSingleWorkout = (workoutId) => {
  const workoutToDelete = Workout.deleteSingleWorkout(workoutId);
  return workoutToDelete;
};

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createNewWorkout,
  updateSingleWorkout,
  deleteSingleWorkout,
};
