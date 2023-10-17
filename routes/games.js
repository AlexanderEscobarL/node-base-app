const { Router } = require('express');
const { gamesGet, 
        gamesPut, 
        gamesPost, 
        gamesDelete } = require('../controllers/games')

const router = Router();

router.get('/', gamesGet);

router.put('/:id', gamesPut);

router.post('/', gamesPost);

router.delete('/', gamesDelete);

module.exports = router;