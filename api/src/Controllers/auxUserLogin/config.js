const crypt = require('bcryptjs');

let secret = 'SecretKeyOfEcom';

const salt = crypt.genSaltSync(10);
secret = crypt.hashSync(secret, salt);

module.exports = {
    secret
};
