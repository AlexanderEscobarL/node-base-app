import { resolve } from "path";
import PostgresDataHandler from "./postgres-data-handler";

export default class DataRetriever {

    public async findAllGames(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                const gameList = new PostgresDataHandler().findAllGames();
                resolve(gameList)
            } catch (error: any) {
                reject(new Error(error))
            }
        })
    }

    public async findGamesByLocation(locationId: number): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                const gameList = new PostgresDataHandler().findGamesByLocation(locationId);
                resolve(gameList)
            } catch (error: any) {
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