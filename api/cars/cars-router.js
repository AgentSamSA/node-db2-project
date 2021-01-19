const express = require('express');
const Car = require("./cars-model");

const router = express.Router();

router.get("/", (req, res, next) => {
    Car.get()
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(next);
});

router.get("/:id", (req, res, next) => {
    const { id } = req.params;

    Car.getById(id)
        .then(car => {
            res.status(200).json(car);
        })
        .catch(next);
});

router.post("/", (req, res, next) => {
    Car.insert(req.body)
        .then(car => {
            res.status(201).json(car);
        })
        .catch(next);
});

router.put("/:id", (req, res, next) => {
    const { id } = req.params;

    Car.update(id, req.body)
        .then(car => {
            res.status(200).json(car);
        })
        .catch(next);
});

router.delete("/:id", (req, res, next) => {
    const { id } = req.params;

    Car.delete(id)
        .then(count => {
            res.status(200).json({ message: "the car data has been deleted" });
        })
        .catch(next);
});

router.use((err, req, res, next) => {
    const env = process.env.NODE_ENV || "development";
    const message = env === "development"
        ? err.message
        : "something went wrong!"
    res.status(500).json({
        message: message,
        stack: err.stack
    });
});

module.exports = router;