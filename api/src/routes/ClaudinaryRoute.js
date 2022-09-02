const { Router } = require('express');
const {
    prob
    } = require('../Controllers/ClaudinaryControl.js');

    const claudRoute = Router();
claudRoute.get('/',prob);

module.exports = claudRoute;