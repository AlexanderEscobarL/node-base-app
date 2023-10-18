import { Response, Request } from 'express';
import DataRetriever from "../process/data-retriever";

export const teamsGet = async (req: Request, res: Response) => {
    const retriever = new DataRetriever();
    const gameList = await retriever.findAllTeams();

    if (gameList) {
        res.json(gameList);
    }
}