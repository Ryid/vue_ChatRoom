// 管理基本類別

class ManageBase {
    constructor() {
        this.rules = new Map;
        this.minLen = 4;
        this.maxLen = 20;
    }
    addRule(name, rule) {
        let reg_rule = new RegExp(rule);
        this.rules.set(name, reg_rule);
    }
    deleteRule(name) {
        this.rules.delete(name);
    }
    // 取得規則
    getRule(name) {
        return this.rules.get(name);
    }
    // 改變長度
    changeMinLen(len) {
        this.minLen = Number(len);
    }
    changeMaxLen(len) {
        this.maxLen = Number(len);
    }
}

module.exports={
    ManageBase
}