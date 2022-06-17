const recordService = require("../services/recordService");

// getRecordForWorkout
const getRecordForWorkout = (req, res) => {
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
  const workoutRecords = recordService.getRecordForWorkout(workoutId);
  res.send({ status: "OK", data: workoutRecords });
};

module.exports = {
  getRecordForWorkout,
};
