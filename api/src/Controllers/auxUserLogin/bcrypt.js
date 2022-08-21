const crypt = require('bcryptjs');

async function bcrypt(password) {
    const salt = await crypt.genSalt(10);
    return crypt.hash(password, salt);
};

function validatePassword(passIn, passDb) {
    return crypt.compare(passIn, passDb);
};

module.exports = {
    bcrypt,
    validatePassword
};
