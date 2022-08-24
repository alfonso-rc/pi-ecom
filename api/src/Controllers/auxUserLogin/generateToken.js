const jwt = require('jsonwebtoken');
const config = require('./config');

function generateToken(id) {
    const payload = {
        id: id
    };
    const token = jwt.sign(payload, config.secret, { expiresIn: '3d' });
    return token;
};

module.exports = generateToken;
