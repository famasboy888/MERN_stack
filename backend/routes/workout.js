const express = require('express');

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
router.post('/', (request, response) => {
    response.json({msg:"POST new workout"});
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