const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = (filterParams) => {
  try {
    let workouts = DB.workouts; //using 'let' cause we might overwrite it incase of othe filters
    //if there are filter params, filter the workouts
    if (filterParams) {
      return workouts.filter((workout) =>
        workout.mode.toLowerCase().includes(filterParams.mode)
      );
    }
    return workouts;
  } catch (err) {
    throw { status: 500, message: "Error getting the workouts" || err.message };
  }
};

const createNewWorkout = (newWorkout) => {
  try {
    const isAlreadyAdded = DB.workouts.find(
      (workout) => workout.name === newWorkout.name
    );
    if (isAlreadyAdded) {
      //if the workout is already added, return an error
      //using throw to stop the function execution
      //by sending a different data structure
      //unlike throw new Error that requires a string
      throw { status: 400, message: `${newWorkout.name} already exists` };
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
  } catch (err) {
    throw { status: err?.status || 500, message: err?.message || err };
  }
};

const getSingleWorkout = (workoutId) => {
  try {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    //if the workout id is not valid, return an error
    if (!workout) {
      return;
    }
    return workout;
  } catch (err) {
    throw { status: err?.status || 500, message: err?.message || err };
  }
};

const updateSingleWorkout = (workoutId, workoutChanges) => {
  try {
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
  } catch (err) {
    throw { status: err?.status || 500, message: err?.message || err };
  }
};

const deleteSingleWorkout = (workoutId) => {
  try {
    const workoutToDelete = DB.workouts.find(
      (workout) => workout.id === workoutId
    );
    //remove the workout from the database
    workoutToDelete &&
      DB.workouts.splice(DB.workouts.indexOf(workoutToDelete), 1);
    //save the changes to the database
    saveToDatabase(DB);
  } catch (err) {
    throw { status: err?.status || 500, message: err?.message || err };
  }
};

module.exports = {
  getAllWorkouts,
  createNewWorkout,
  getSingleWorkout,
  updateSingleWorkout,
  deleteSingleWorkout,
};
