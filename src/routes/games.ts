import { Router } from 'express';
import { check } from 'express-validator';
import {
    gamesGet,
    gamesPut,
    gamesPost,
    gamesDelete,
    gamesGetByLocation
} from '../controllers/games';
import { requestValidator } from '../middlewares/request-validator';

export const gameRouter = Router();

gameRouter.get('/', gamesGet);
gameRouter.get('/find',[
    check('locationId', 'locationId is a required query string').not().isEmpty(),
    requestValidator
 ], gamesGetByLocation);

gameRouter.put('/:id', gamesPut);

gameRouter.post('/', [
    check('dateAndTime', 'La fecha y hora del juego es requerida').not().isEmpty(),
    check('localTeam', 'Equipo local es requerido').not().isEmpty(),
    check('visitorTeam', 'Equipo visitante es requerido').not().isEmpty(),
    check('location', 'Ubicacion del juego es requerida').not().isEmpty(),
    requestValidator
], gamesPost);

gameRouter.delete('/games', gamesDelete);

function teamsGet(arg0: string, teamsGet: any) {
    throw new Error('Function not implemented.');
}
