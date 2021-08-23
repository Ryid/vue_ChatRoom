const bcrypt = require('bcrypt')
const bcryptConfig = bcrypt.genSaltSync(10);

// 同步方式加密密碼
function encryptPassword(password) {
    // 生成salt的迭代次數：默認值是10，推薦值12
    const saltRounds = (bcryptConfig && bcryptConfig.rounds) || 10
    // 隨機生成salt
    const salt = bcrypt.genSaltSync(saltRounds)
    // 獲取hash值
    return bcrypt.hashSync(password, salt)
  }
  
  // 異步方式加密密碼
  async function encryptPasswordAsync(password) {
    // 生成salt的迭代次數
    const saltRounds = (bcryptConfig && bcryptConfig.rounds) || 10
    return new Promise((resolve, reject) => {
      // 生成salt並獲取hash值
      bcrypt.genSalt(saltRounds, function(err, salt) {
        err && reject(err)
        bcrypt.hash(password,salt, function(err, hash) {
          // 把hash值賦值給password變量
          err ? reject(err) :resolve(hash)
        })
      });
    })
  }
  
  // 同步方式驗證密碼
  function verifyPassword(password1, password2){
    return bcrypt.compareSync(password1, password2)
  }
  
  // 異步方式驗證密碼
  async function verifyPasswordAsync(password1, password2){
    return new Promise((resolve, reject) => {
      bcrypt.compare(password1, password2, function(err, res) {
        err ? reject(err) : resolve(res)
      })
    })
  }
  
  module.exports = {
    encryptPassword,
    verifyPassword,
    encryptPasswordAsync,
    verifyPasswordAsync
  }