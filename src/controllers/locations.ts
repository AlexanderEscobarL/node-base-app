import { Response, Request } from 'express';
import DataRetriever from "../process/data-retriever";

export const locationsGet = async (req: Request, res: Response) => {
    const retriever = new DataRetriever();
    const gameList = await retriever.findAllLocations();

    if (gameList) {
        res.json(gameList);
    }
}