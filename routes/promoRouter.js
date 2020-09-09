const express = require("express");

const bodyParser = require("body-parser");

const promRouter = express.Router();
promRouter.use(bodyParser.json());

promRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("content-type", "text/plain");
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the promotions to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the promotion : ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res, next) => {
        res.end('Deleting all promotions');
    });

promRouter.route('/:promoId')
    .get((req, res, next) => {
        res.end('Will send details of the promotions: ' + req.params.promoId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /promotions/' + req.params.promoId);
    })
    .put((req, res, next) => {
        res.write('Updating the promotions: ' + req.params.promoId + '\n');
        res.end('Will update the promotions: ' + req.body.name +
            ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting promotions: ' + req.params.promoId);
    });

module.exports = promRouter;