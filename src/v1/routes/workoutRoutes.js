const express = require("express");
//importing our controller methods
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");
const memberController = require("../../controllers/memberController");


const router = express.Router();

//defining the different endpoints
//getting all workouts
/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.get("/", workoutController.getAllWorkouts);

//getting a single workout
router.get("/:workoutId", workoutController.getSingleWorkout);

//getting all records for a single workout
router.get("/:workoutId/records", recordController.getRecordForWorkout);

//getting a single member
router.get("/members/:memberId", memberController.getMember);
//creating a new workout
router.post("/", workoutController.createNewWorkout);

//updating a workout
router.put("/:workoutId", workoutController.updateSingleWorkout);

//deleting a workout
router.delete("/:workoutId", workoutController.deleteSingleWorkout);

module.exports = router;
