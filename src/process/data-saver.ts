import { Logger } from '../utils/Logger';
import PostgresDataHandler from "./postgres-data-handler";

export default class DataSaver {

    private logger: Logger;

    constructor() {
        this.logger = new Logger();
    }

    public async saveGame(dateAndTime: Date, localId: number, visitId: number, locationId: number): Promise<any> {
        this.logger.info(`Saving game with values: ${dateAndTime} - localId: ${localId} - visitId: ${visitId} - locationId: ${locationId}`);
        return new Promise((resolve, reject) => {
            try {
                const game = new PostgresDataHandler().saveGame(dateAndTime, localId, visitId, locationId);
                resolve(game);
            } catch (error: any) {
                this.logger.error('Error saving game', error);
                reject(new Error(error))
            }
        })
    }
}