import { Router } from 'express';
import { locationsGet } from '../controllers/locations';

export const locationRouter = Router();

locationRouter.get('/', locationsGet);