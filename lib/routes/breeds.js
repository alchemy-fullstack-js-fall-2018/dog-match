const router = require('express').Router();
const Breed = require('../models/Breed');

module.exports = router
    .post('/', (req, res, next) => {
        const {
            name,
            weightRange,
            lifespan,
            temperament,
            coatTypes,
            hypoallergenic,
            shed
        } = req.body;

        Breed.create({
            name,
            weightRange,
            lifespan,
            temperament,
            coatTypes,
            hypoallergenic,
            shed
        })
            .then((breed => res.json(breed)))
            .catch(next);
    });