const express = require('express');
const router = express.Router();
const { generatePattern } = require('../controllers/patternController');
const CompletedPattern = require('../models/CompletedPattern');

router.post('/generate', generatePattern);

router.post('/completed', async (req, res) => {
    try {
        const completedPattern = new CompletedPattern(req.body);
        await completedPattern.save();
        res.status(201).json(completedPattern);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router; 