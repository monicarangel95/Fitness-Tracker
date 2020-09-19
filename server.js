
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRouter = require("./routes/htmlRoutes");
const apiRouter = require("./routes/apiRoutes");
const db = mongoose.connection;
const PORT = process.env.PORT || 3000;
const Exercise = require("./models/exerciseModel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//create initial root route 
app.use(express.static("public"));

//might have to change the db name depending on what i call it
mongoose.connect('mongodb+srv://Monica-95:test@cluster0.ii1sf.mongodb.net/test', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

db.on("error", error => console.error(error));
db.once("open", () => console.log("connection success"));

app.use(htmlRouter);
app.use(apiRouter);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});