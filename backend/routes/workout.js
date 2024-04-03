const express = require('express');
const workoutModel = require('../models/WorkoutModels');

const router = express.Router();

// Get all workouts
router.get('/', (request, response) => {
    response.json({msg:"Get workouts"});
})

// Get single workouts
router.get('/:id', (request, response) => {
    response.json({msg:"Get workout id"});
})

// Post single workouts
router.post('/', async (request, response) => {
    const {title, load, reps} = request.body;
    
    console.log(request.body);

    try {
        const newWorkout = await workoutModel.create({title, load, reps});
        response.status(200).json(newWorkout);
    } catch (error) {
        response.status(400).json({error: error.message});
    }
})

// Delete single workouts
router.delete('/:id', (request, response) => {
    response.json({msg:"Delete workout"});
})

// Update single workouts
router.patch('/:id', (request, response) => {
    response.json({msg:"Update new workout"});
})

module.exports = router;