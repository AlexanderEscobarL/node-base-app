"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const games_1 = require("../controllers/games");
const request_validator_1 = require("../middlewares/request-validator");
exports.gameRouter = (0, express_1.Router)();
exports.gameRouter.get('/', games_1.gamesGet);
exports.gameRouter.get('/find', [
    (0, express_validator_1.check)('locationId', 'locationId is a required query string').not().isEmpty(),
    request_validator_1.requestValidator
], games_1.gamesGetByLocation);
exports.gameRouter.put('/:id', games_1.gamesPut);
exports.gameRouter.post('/', [
    (0, express_validator_1.check)('dateAndTime', 'La fecha y hora del juego es requerida').not().isEmpty(),
    (0, express_validator_1.check)('localTeam', 'Equipo local es requerido').not().isEmpty(),
    (0, express_validator_1.check)('visitorTeam', 'Equipo visitante es requerido').not().isEmpty(),
    (0, express_validator_1.check)('location', 'Ubicacion del juego es requerida').not().isEmpty(),
    request_validator_1.requestValidator
], games_1.gamesPost);
exports.gameRouter.delete('/games', games_1.gamesDelete);
function teamsGet(arg0, teamsGet) {
    throw new Error('Function not implemented.');
}
