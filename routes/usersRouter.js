const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('lol working crazy !')
    
});



module.exports = router;
