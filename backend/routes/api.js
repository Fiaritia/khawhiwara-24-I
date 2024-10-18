const express = require('express');
const router = express.Router();

// Exemple d'endpoint GET
router.get('/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

module.exports = router;
