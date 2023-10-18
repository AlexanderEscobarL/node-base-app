import { Router } from 'express';
import { teamsGet } from '../controllers/teams';

export const teamRouter = Router();

teamRouter.get('/', teamsGet);