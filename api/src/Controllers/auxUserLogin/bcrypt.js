const crypt = require("bcryptjs");

function bcrypt(password) {
    const salt = crypt.genSaltSync(10);
    return crypt.hashSync(password, salt);
}

function validatePassword(passIn, passDb) {
    return crypt.compareSync(passIn, passDb);
}

module.exports = {
    bcrypt,
    validatePassword,
};
