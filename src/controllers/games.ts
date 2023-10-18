import { PrismaClientValidationError } from '@prisma/client/runtime/library';
import { Response, Request } from 'express';
import DataRetriever from '../process/data-retriever';
import DataSaver from '../process/data-saver';

export const gamesGet = async (req: Request, res: Response) => {
    try {
        const retriever = new DataRetriever();
        const gameList = await retriever.findAllGames();

        if (gameList) {
            res.json(gameList);
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const gamesGetByLocation = async (req: Request, res: Response) => {
    try {
        const query = req.query;
        const retriever = new DataRetriever();
        if (query.locationId) {
            const gameList = await retriever.findGamesByLocation(Number(query.locationId));
            if (gameList) {
                res.json(gameList);
            }
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const gamesPut = (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    res.json({
        msg: 'Alex PUT test response... Controller',
        id
    });
}

export const gamesPost = async (req: Request, res: Response) => {
    try {
        const { dateAndTime, localTeam, visitorTeam, location } = req.body;
        const saver = new DataSaver();
        const game = await saver.saveGame(dateAndTime, localTeam.id, visitorTeam.id, location.id);
        if (game) {
            res.json({
                msg: `Game created successfully, id: ${game.id}`,
            });
        }
    } catch (error: any) {
        if(error instanceof PrismaClientValidationError){
            res.status(500).json(`Error on the field validation: ${error}`);
        }
        res.status(500).json(`Error saving game: ${error}`);
    }

}

export const gamesDelete = (req: Request, res: Response) => {
    res.json({
        msg: 'Alex DELETE test response... Controller'
    });
}