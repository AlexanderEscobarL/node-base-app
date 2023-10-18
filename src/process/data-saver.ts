import { Prisma } from "@prisma/client";
import PostgresDataHandler from "./postgres-data-handler";

export default class DataSaver {

    public async saveGame(dateAndTime: Date, localId: number, visitId: number, locationId: number): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                const game = new PostgresDataHandler().saveGame(dateAndTime, localId, visitId, locationId);
                resolve(game)
            } catch (error: any) {
                reject(new Error(error))
            }
        })
    }
}