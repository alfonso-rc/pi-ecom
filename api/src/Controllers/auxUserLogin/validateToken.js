const jwt = require('jsonwebtoken');
const express = require('express');
const config = require('./config');

const verification = express.Router();


verification.use((req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (!token) {
        return res.status(401).send({ error: 'Es necesario un token de autenticación'});
    }
    else if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);

        jwt.verify(token, config.secret, (error, decoded) => {
            if (error) {
                return res.json({ message: 'El token no es valido' });
            }
            else {
                req.decoded = decoded;
                console.log(decoded.id);
                next();
            }
        });
    }
});

module.exports = verification;
