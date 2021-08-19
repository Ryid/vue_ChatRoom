<template>
  <div class="login_group">
    <div class="login">
      <form action="">
        <h2>會員登入</h2>
        <label for="userName">帳號</label>
        <input type="text" id=" " v-model.trim="user_name" />
        <label for="userPwd">密碼</label>
        <input type="password" id="userPwd" v-model.trim="password"/>
        <div class="buttonGroup">
          <button @click.prevent="getdata">取消</button>
          <button @click.prevent="login">送出</button>
        </div>
      </form> 
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user_name: "",
      password: "",
    };
  },
  methods: {
    getdata() {
      this.user_name='';
      this.password='';
    },
    login() {
      axios
        .post("http://localhost:1111/login", {
          user: this.user_name,
          password: this.password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.success === true) {
            const {token} = res.data ;
            console.log(token);
            document.cookie=`hexToken=${token};`
            this.$router.push("/");
          }
        })
        .catch((err) => console.log(err.response));
    },
  },
};
</script>

<style src="./regist.css"></style>
