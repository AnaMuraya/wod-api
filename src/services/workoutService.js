const { v4: uuidv4 } = require("uuid");
const Workout = require("../database/Workout");

//get all workouts
const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};
//get a single workout
const getSingleWorkout = () => {
  return `<h3>Hello from this workout!</h3>`;
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
const updateSingleWorkout = () => {
  return `<h3>Updating existing workout!</h3>`;
};

//delete a workout
const deleteSingleWorkout = () => {
  return `<h3>Deleting an existing workout!</h3>`;
};

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createNewWorkout,
  updateSingleWorkout,
  deleteSingleWorkout,
};
