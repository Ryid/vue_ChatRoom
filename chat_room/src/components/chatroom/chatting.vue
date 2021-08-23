<template>
  <div class="chatRoom">
    <div class="roomHead">
      <h2></h2>
      {{ changeChat == "group" ? "打屁聊天群" : changeChat }}
    </div>
    <ul>
      <li
        class="messages"
        v-for="item in chatMsg"
        :class="{ personal: item.username == user.username }"
        :key="item"
      >
        <div class="userInfo" v-if="item.username !== user.username">
          <div class="head"></div>
          <div class="name">{{ item.username }}</div>
        </div>
        <p class="userMsg">
          {{ item.msg }}
        </p>
        <div class="timestamp">{{ item.timestamp }}</div>
      </li>
    </ul>
    <div class="sendGroup">
      <input type="text" v-model="myMsg" @keyup.enter="sendMsg" />
      <button @click.prevent="sendMsg">傳送</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      chatMsg: "",
      myMsg: "",
    };
  },
  methods: {
    getMsg() {
      axios
        .post("http://localhost:1111/getChatMsg", {
          user: this.user.username,
          purpose: this.changeChat,
        })
        .then((res) => {
          this.chatMsg = res.data;
        })
        .catch((err) => console.log(err));
    },
    refresh() {
      setInterval(() => {
        this.getMsg();
        console.log(123);
      }, 3000);
    },
    sendMsg() {
      if (this.myMsg == "") return;
      let date = new Date();
      let hour =
        date.getHours() < 10 ? "0" + date.getHours() : "" + date.getHours();
      let min =
        date.getMinutes() < 10
          ? "0" + date.getMinutes()
          : "" + date.getMinutes();
      let now = `${hour}:${min}`;

      let msg = {
        username: this.user.username,
        msg: this.myMsg,
        timestamp: now,
        purpose: this.changeChat,
      };

      axios
        .post("http://localhost:1111/sendMsg", msg)
        .then((res) => {
          this.chatMsg.push(msg);
          this.myMsg = "";
        })
        .catch((err) => console.log(err));
    },
  },
  props: ["user", "changeChat"],
  watch: {
    changeChat() {
      this.getMsg();
    },
  },
  created() {
    this.getMsg();
    this.timer = setInterval(() => {
      this.getMsg();
    }, 3000);
  },
  updated() {
    // 讓scroll保持在最下面
    let ele = document.querySelector(".chatRoom ul");
    ele.scrollTop = ele.scrollHeight;
  },
  unmounted() {
    clearInterval(this.timer);
  },
};
</script>

<style src="./chatting.css" scoped></style>
