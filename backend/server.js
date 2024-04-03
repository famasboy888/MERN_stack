require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workout');
const mongoose = require('mongoose');

const app = express();


// Adding a middle ware
app.use((request, response, next) => {
    console.log(request.path, request.method);
    next();
})

//Routes
app.use('/api/workouts', workoutRoutes);

// Connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listening to port 4000...ss.");
        });
    })
    .catch((e) => {
        console.log(e);
    });



