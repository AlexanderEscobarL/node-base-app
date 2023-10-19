import { Logger } from '../utils/Logger';
import PostgresDataHandler from "./postgres-data-handler";

export default class DataRetriever {

    private logger: Logger;

    constructor() {
        this.logger = new Logger();
    }

    public async findAllGames(): Promise<any> {
        this.logger.info('Trying to find all games stored on the db');
        return new Promise((resolve, reject) => {
            try {
                const gameList = new PostgresDataHandler().findAllGames();
                resolve(gameList)
            } catch (error: any) {
                this.logger.error('Error trying to find all games stored on the db', error);
                reject(new Error(error))
            }
        })
    }

    public async findGamesByLocation(locationId: number): Promise<any> {
        this.logger.info('Trying to find games by location');
        return new Promise((resolve, reject) => {
            try {
                const gameList = new PostgresDataHandler().findGamesByLocation(locationId);
                resolve(gameList)
            } catch (error: any) {
                this.logger.error('Error trying to find games by location', error);
                reject(new Error(error))
            }
        })
    }

    public findAllLocations(): Promise<any> {
        return new PostgresDataHandler().findAllLocations();
    }

    public findAllTeams(): Promise<any> {
        return new PostgresDataHandler().findAllTeams();
    }
}