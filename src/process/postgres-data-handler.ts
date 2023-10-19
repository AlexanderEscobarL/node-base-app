import { Logger } from '../utils/Logger';
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export default class PostgresDataHandler {

    public saveGame(dateAndTime: Date, localId: number, visitId: number, locationId: number): Promise<any> {
        try {
            const result = prisma.game.create({
                data: {
                    dateAndTime,
                    localTeam: { connect: { id: localId } },
                    visitorTeam: { connect: { id: visitId } },
                    location: { connect: { id: locationId } },
                },
            })
            return result
        } catch (error: any) {
            throw new Error(error);            
        }
    }

    public findAllGames(): Promise<any> {
        const gameList = prisma.game.findMany({
            include: {
                localTeam: true,
                visitorTeam: true,
                location: true
            }
        });
        return gameList;
    }

    public findGamesByLocation(location: number): Promise<any>  {
        const gameList = prisma.game.findMany({
            where: {
                locationId: location
            },
            include: {
                localTeam: true,
                visitorTeam: true,
                location: true
            }
        });
        return gameList;
    }

    public findAllTeams(): Promise<any> {
        const teamList = prisma.team.findMany();
        return teamList;
    }

    public async findAllLocations(): Promise<any> {
        const locationList = prisma.location.findMany();
        return locationList;
    }

}