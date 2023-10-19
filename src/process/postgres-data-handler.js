"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PostgresDataHandler {
    saveGame(dateAndTime, localId, visitId, locationId) {
        try {
            const result = prisma.game.create({
                data: {
                    dateAndTime,
                    localTeam: { connect: { id: localId } },
                    visitorTeam: { connect: { id: visitId } },
                    location: { connect: { id: locationId } },
                },
            });
            return result;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    findAllGames() {
        const gameList = prisma.game.findMany({
            include: {
                localTeam: true,
                visitorTeam: true,
                location: true
            }
        });
        return gameList;
    }
    findGamesByLocation(location) {
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
    findAllTeams() {
        const teamList = prisma.team.findMany();
        return teamList;
    }
    findAllLocations() {
        return __awaiter(this, void 0, void 0, function* () {
            const locationList = prisma.location.findMany();
            return locationList;
        });
    }
}
exports.default = PostgresDataHandler;
