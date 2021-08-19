const Router = require('koa-router');
const login = new Router();
const bodyparser = require('koa-bodyparser')
const jwt = require('jsonwebtoken') //產生token
const db = require('../utils/db')
login.use(bodyparser()) //調用這個中間件取得前端Post的值

login.post('/', async (ctx) => {
    // console.log(ctx.request.body) //顯示傳來的值
    let username = ctx.request.body.user;
    let password = ctx.request.body.password
    ctx.body = "登入";

    // 判斷資料庫有沒有帳號
    let searchSql = `select * from user where username='${username}'`
    let myarr = await new Promise((resolve, reject) => {
        return db.query(searchSql, (err, data) => {
            if (err) throw err;
            resolve(data);
        })
    })

    if (myarr.length > 0) {
        console.log(myarr)
        if (myarr[0].password === password) {
            ctx.body = {
                msg: '登入成功',
                token: myarr[0].token,
                account: myarr[0].username,
                success: true
            }
        } else {
            ctx.body = {
                msg: '帳號或密碼錯誤',
            }
        }
    } else if (username != '' && password != '') {
        //expiresIn token存在時間 3600=1小時
        let mytoken = jwt.sign({ username: username, password: password }, 'secret', { expiresIn: '1h' });
        let insertSql = `insert into user (id,username,password,token) values(null,'${username}','${password}','${mytoken}')`;
        let result = await new Promise((resolve, reject) => {
            return db.query(insertSql, (err, data) => {
                if (err) throw err;
                console.log(data);
                let obj = {
                    msg: "註冊成功",
                    token: mytoken,
                    username: username
                }
                resolve(obj);
            })
        })
        ctx.body = result
    } else {
        ctx.body = '帳號密碼不得為空'
    }
})

module.exports = login;