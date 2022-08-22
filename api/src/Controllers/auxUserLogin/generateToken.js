const jwt = require('jsonwebtoken');
const config = require('./config');

function generateToken() {
    const payload = {
        check: true
    };
    const token = jwt.sign(payload, config.secret, { expiresIn: '3d' });
    return {
        auth: true,
        token
    };
};

module.exports = generateToken;
