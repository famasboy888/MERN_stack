# Adding mongo DB

## Install `Mongoose`

`npm install mongoose`

## We added the following to `.env` file:

```bash
PORT=4XXX
MONGO_URI=mongodb+srv://XXXXX@app.3lxxxxxxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxx
```

## We implemented the following connection

```bash
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listening to port 4000...ss.");
        });
    })
    .catch((e) => {
        console.log(e);
    });

```