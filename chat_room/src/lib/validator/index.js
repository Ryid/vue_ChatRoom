const { UserNameValidator } = require('./user_name');
const { PasswordValidator } = require('./password');

const user_name_validator = new UserNameValidator;
// user_name_validator.changeMinLen(7);

const password_validator = new PasswordValidator;

module.exports = {
    checkUserName: (str) => user_name_validator.check(str),
    checkPassword: (str) => password_validator.check(str)
}