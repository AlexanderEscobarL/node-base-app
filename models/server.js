const express = require('express')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.gamesPath = '/api/games'
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(express.static('public'));
    }

    routes() {
       this.app.use(this.gamesPath, require('../routes/games'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })

    }
}

module.exports = Server;