import express from 'express';
import { gameRouter } from '../routes/games';
import { locationRouter } from '../routes/locations';
import { teamRouter } from '../routes/teams';
import cors from 'cors';

const app = express();

export default class Server {
    private port: string | undefined;
    private gamesPath: string;
    private locationsPath: string;
    private teamsPath: string;

    constructor() {
        this.port = process.env.PORT;
        this.gamesPath = '/api/games'
        this.locationsPath = '/api/locations'
        this.teamsPath = '/api/teams'
        this.middlewares();
        this.routes();
    }

    middlewares() {
        app.use(cors());
        app.use(express.json())
        app.use(express.static('public'));
    }

    routes() {
        app.use(this.gamesPath, gameRouter)
        app.use(this.locationsPath, locationRouter)
        app.use(this.teamsPath, teamRouter)
    }

    listen() {
        app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })

    }
}