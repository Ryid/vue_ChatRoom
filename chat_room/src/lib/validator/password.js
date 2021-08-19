const { ValidatorBase } = require('./base');
const { SuccessModel, FailModel } = require('./model')

class PasswordValidator extends ValidatorBase {
    constructor() {
        super()
        this.addRule(
            `password_rule`,
            `^[a-zA-Z0-9_-]{0,}$`
        )
    }
    check(val) {
        const success_model = new SuccessModel();
        const fail_model = new FailModel();

        let len_result = this.testLen(val);
        let rule_result = this.testRule(`password_rule`, val);

        let len_condition = len_result === `格式正確`;
        let rule_condition = rule_result;

        if (len_condition && rule_condition) {
            success_model.setMessage(`密碼長度正確,格式正確`)
            return success_model
        }

        fail_model.setMessage(`密碼長度${len_result},格式${rule_result ? `正確` : `錯誤`}`);
        return fail_model
    }
}

module.exports={
    PasswordValidator
}