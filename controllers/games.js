const { request, response } = require('express');

const gamesGet = (req, res = response) => {
    const query = req.query;
    res.json({
        msg: 'Alex GET test response... Contoller',
        query
    });
}

const gamesPut = (req, res = response) => {
    const id = req.params.id;
    const body = req.body;
    res.json({
        msg: 'Alex PUT test response... Contoller',
        id
    });
}

const gamesPost = (req, res = response) => {
    const {local_team, visitor_team} = req.body;

    res.json({
        msg: 'Alex POST test response... Contoller',
        local_team,
        visitor_team
    });
}

const gamesDelete = (req, res = response) => {
    res.json({
        msg: 'Alex DELETE test response... Contoller'
    });
}

module.exports = {
    gamesGet,
    gamesPut,
    gamesPost,
    gamesDelete,
}