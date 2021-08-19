const { ManageBase } = require('./manage.js')

class ValidatorBase extends ManageBase {
    testLen(val) {
        const str = String(val);
        const len = str.length;

        let tooShort = len < this.minLen;
        let tooLong = len > this.maxLen;

        let result = `格式正確`;
        if (tooShort) result = `長度太短`;
        if (tooLong) result = `長度太長`;

        return result;
    }

    testRule(name, val) {
        let str = String(val);
        // 拿規則
        let rule = this.getRule(name);
        // 測試規則
        let result = rule.test(str);

        return result;
    }
}

module.exports = {
    ValidatorBase
}