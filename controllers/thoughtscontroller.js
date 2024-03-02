const Thought = require('../models/Thought');

const thoughtController = {
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getThoughtById: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.id);
      res.json(thought);
    } catch (err) {
      res.status(404).json({ message: 'Thought not found' });
    }
  },

  createThought: async (req, res) => {
    try {
      const thought = await Thought.create(req.body);
      res.status(201).json(thought);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  updateThought: async (req, res) => {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(thought);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  deleteThought: async (req, res) => {
    try {
      await Thought.findByIdAndDelete(req.params.id);
      res.status(204).end();
    } catch (err) {
      res.status(404).json({ message: 'Thought not found' });
    }
  }
};

module.exports = thoughtController;
