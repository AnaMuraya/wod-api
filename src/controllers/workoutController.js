// methods for each workout endpoint

// get all workouts
const getAllWorkouts = (req, res) => {
    res.send('Hello from all workouts!');
}

// get a single workout
const getSingleWorkout = (req, res) => {
    res.send(`<h3>Hello from this workout!</h3>`);
}

// create a new workout
const createNewWorkout = (req, res) => {
    res.send(`<h3>Creating a new workout!</h3>`);
}

// update a workout
const updateSingleWorkout = (req, res) => {
    res.send(`<h3>Updating existing workout!</h3>`);
}

// delete a workout
const deleteSingleWorkout = (req, res) => {
    res.send(`<h3>Deleting an existing workout!</h3>`);
}

module.exports = {
    getAllWorkouts,
    getSingleWorkout,
    createNewWorkout,
    updateSingleWorkout,
    deleteSingleWorkout
}
