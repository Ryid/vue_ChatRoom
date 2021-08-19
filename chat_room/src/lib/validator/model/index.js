// 返回模型基類

class ModelBase {
    constructor() {
        this.correct = false;
        this.message = ``;
    }

    // 設定正確性
    setCorrect(bol) {
        this.correct = bol;
    }
    // 設定返回的消息
    setMessage(msg) {
        this.message = msg;
    }
}

// 返回成功
class SuccessModel extends ModelBase {
    constructor() {
        super();
        this.setCorrect(true);
    }
}
// 失敗
class FailModel extends ModelBase {
    constructor() {
        super();
        this.setCorrect(false);
    }
}

module.exports = {
    SuccessModel,
    FailModel
}