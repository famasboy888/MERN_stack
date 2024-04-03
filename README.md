# Creating Models from Schemas

We need to create `Schema` from mongoose.

Then we export it as a `model` by giving it a name and passing the `Schema` create 

```bash
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Workout', workoutSchema);
```

## Inserting into Mongo DB using `create()`

Take note that we need to use `async` and `await`.

```bash
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
```