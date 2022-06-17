const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded = DB.workouts.find(
    (workout) => workout.name === newWorkout.name
  );
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
};

const getSingleWorkout = (workoutId) => {
  const workout = DB.workouts.find((workout) => workout.id === workoutId);
  //if the workout id is not valid, return an error
  if (!workout) {
    return;
  }
  return workout;
};

const updateSingleWorkout = (workoutId, workoutChanges) => {
  const workoutToUpdate = DB.workouts.find(
    (workout) => workout.id === workoutId
  );
  //if the workout id is not valid, return an error
  if (!workoutToUpdate) {
    return;
  }
  //update the workout
  const updatedWorkout = {
    ...workoutToUpdate,
    ...workoutChanges,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  //replace the old workout with the updated one
  DB.workouts[DB.workouts.indexOf(workoutToUpdate)] = updatedWorkout;
  //save the changes to the database
  saveToDatabase(DB);
  return updatedWorkout;
};

const deleteSingleWorkout = (workoutId) => {
  const workoutToDelete = DB.workouts.find(
    (workout) => workout.id === workoutId
  );
  //remove the workout from the database
  workoutToDelete &&
    DB.workouts.splice(DB.workouts.indexOf(workoutToDelete), 1);
  //save the changes to the database
  saveToDatabase(DB);
  return workoutToDelete;
};

module.exports = {
  getAllWorkouts,
  createNewWorkout,
  getSingleWorkout,
  updateSingleWorkout,
  deleteSingleWorkout,
};
