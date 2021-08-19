<template>
  <div class="main">
    <div class="userList">
      <ul>
        <li @click="userHandle({ username: 'group' })">
          <i class="fas fa-user">打屁聊天群</i>
        </li>
        <li
          v-for="nowUsers in filterUsers"
          :key="nowUsers.username"
          @click="userHandle(nowUsers)"
        >
          <i class="fas fa-user">{{ nowUsers.username }}</i>
        </li>
      </ul>
    </div>
    <chatroom :user="user" :changeChat="changeChat" />
    <div class="userInfo">
      你好{{ user.username }}
      <span @click.prevent="signOut">登出</span>
    </div>
  </div>
</template>

<script>
import chatroom from "@/components/chatroom/chatting.vue";
import axios from "axios";

export default {
  data() {
    return {
      users: "",
      changeChat: "group",
      user: {
        id: "",
        username: "",
      },
    };
  },
  components: {
    chatroom,
  },
  computed: {
    filterUsers() {
      return this.users.filter((users) => {
        return users.username !== this.user.username;
      });
    },
  },
  created() {
    // 驗證是否登入
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    console.log(token);
    axios.defaults.headers.common.Authorization = `${token}`;
    axios
      .post("http://localhost:1111/check", { token })
      .then((res) => {
        console.log(res.data);
        this.user.id = res.data.id;
        this.user.username = res.data.username;
        if (res.data.success === false) {
          this.$router.push("/login");
        }
      })
      .catch((err) => console.log(err.response));

    // 產生聊天訊息
    axios
      .get("http://localhost:1111/getUser")
      .then((res) => {
        // console.log(res.data.id);
        this.users = res.data;
      })
      .catch((err) => console.log(err.response));
  },
  methods: {
    userHandle(user = "group") {
      this.changeChat = user.username;
      // console.log(this.changeChat);
      return this.changeChat;
    },
    signOut() {
      document.cookie = "hexToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      this.$router.push("/login");
      console.log("登出成功");
    },
  },
};
</script>

<style src="./css/ChatRoom.css" scoped></style>