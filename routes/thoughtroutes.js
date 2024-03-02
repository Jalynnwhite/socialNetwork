const express = require('express');
const router = express.Router();
const thoughtController = require('../controllers/thoughtscontroller');

// GET all thoughts
router.get('/', thoughtController.getAllThoughts);

// GET thought by ID
router.get('/:id', thoughtController.getThoughtById);

// POST new thought
router.post('/', thoughtController.createThought);

// PUT update thought by ID
router.put('/:id', thoughtController.updateThought);

// DELETE thought by ID
router.delete('/:id', thoughtController.deleteThought);

module.exports = router;
