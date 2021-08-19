const { log: test } = console;
const { checkUserName, checkPassword } = require('../validator');

test(
    `帳號檢查`,
    checkUserName('1awqtqt')
)

test(
    `密碼檢查`,
    checkPassword('asgags')
)