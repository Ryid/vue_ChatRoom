const Router = require('koa-router');
const signOut = new Router();
const bodyparser = require('koa-bodyparser')
signOut.use(bodyparser());

signOut.get('/',async(ctx)=>{
    console.log(ctx.request.bocy);
    ctx.cookies.set('hexToken','',{signed:false,maxAge:0})
    ctx.body={
        msg:'η»εΊζε',
        success:'ture'
    }
})

module.exports = signOut;