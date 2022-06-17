const DB = require("./db.json");

//getRecordForWorkout
const getRecordForWorkout = (workoutId) => {
    try {
        const record = DB.records.filter((record) => record.workout === workoutId);
        if (!record) {
        throw { status: 404, message: `Record not found for workout ${workoutId}` };
        }
        return record;
    } catch (err) {
        throw { status: err?.status || 500, message: err?.message || err };
    }
    }

module.exports = {
    getRecordForWorkout
}