require('dotenv').config();
const express = require('express');
const workoutRoutes = require('./routes/workout');

const app = express();


// Adding a middle ware
app.use((request, response, next) => {
    console.log(request.path, request.method);
    next();
})

//Routes
app.use('/api/workouts', workoutRoutes);

app.listen(process.env.PORT, () => {
    console.log("Listening to port 4000...ss.");
});

