const express = require('express');
const router = express.Router();
const Alien = require('../models/alienSchema')


// getting all aliens in the database
router.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find()
        res.status(201).json({
            status: "sucess",
            data: aliens
        })
    } catch (err) {
        res.status(404).json({
            status: "failed",
            message: err.message
        })
    }
})


// getting one aliens in the database
router.get('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        res.status(201).json({
            status: "success",
            data: alien
        })
    } catch (err) {
        res.status(402).json({
            status: "failed",
            message: err.message
        })
    }
})


// crearting a aliens
router.post('/', async (req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
        const a1 = await alien.save()
        res.status(202).json({
            status: "success",
            data: a1
        })
    } catch (error) {
        res.status(402).json({
            status: "failed",
            message: error.message
        })
    }
})

//  updating a single alien
router.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: "success",
            data: alien
        })
    } catch (error) {
        res.status(402).json({
            status: "failed",
            message: error.message
        })

    }

})

//  deleting a single alien
router.delete('/:id', async (req, res) => {
    try {
        const alien = await Alien.findOneAndRemove(req.params.id)
        res.json({
            status: 'success',
            data: alien
        })
    } catch (error) {
        res.status(404).json({
           status: 'failed',
           message: error.message
        })  
    }
})

module.exports = router;