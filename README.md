# Starting with the backend

We run `npm init` to create initial `package.json` file.

- Install `npm install express`.

- Install `npm install nodemon -g`.

## Creating RUN shorcuts

We add this to `package.json` > `scripts`.

`"dev": "nodemon server"`


## Hiding variables

We should create an `.env` file to store variables. We should NOT include this in GitHub repos during production.

Then install `npm install dotenv`. This will allow us to read `.env` file from project.


## We added a route handler file with this implementation:

```bash
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
```

It will  be called from the main `server.js` using this:

```bash
const workoutRoutes = require('./routes/workout');

app.use('/api/workouts', workoutRoutes);
```