
const express = require('express');
const router = express.Router();
const Exercise = require("../models/exerciseModel");
router.get("/api/workouts", (req, res) => {
    Exercise.find().then(data => res.json(data)).catch(err => res.json(err));
});

router.post("/api/workouts", (req, res) => {
    Exercise.create({}).then(data => { res.json(data) }).catch(err => res.json(err));
});

router.get("/api/workouts/range", (req, res) => {
    Exercise.find().then(data => res.json(data)).catch(err => res.json(err));
});

router.get("/api/workouts/range", (req, res) => {
    Exercise.create({}).then(data => res.json(data)).catch(err => res.json(err));
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Exercise.findByIdAndUpdate(params.id, { $push: { exercises: body } },
        { new: true, runValidators: true }).then(data => {
            res.json(data)
        }).catch(err => { res.json(err) });
});
module.exports = router;