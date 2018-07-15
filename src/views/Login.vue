<template>
  <Button type="text" @click="wwlogin" class="login_btn">
    <img src="../../static/images/login_blue_big.png"/>
  </Button>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {}
    },
    methods: {
      wwlogin() {
        const redirect_uri = "http://remind.we.bjunicomsi.com:8080";
        const url = "https://open.work.weixin.qq.com/wwopen/sso/qrConnect?appid=ww96aca9fc8050d912&agentid=1000020&redirect_uri=" + encodeURI(redirect_uri) + "&state=1";
        console.log("url:" + url);
        window.location.href = url;
      }
    }
  }
</script>

<style scoped>
  .login_btn {
    position: relative;
    top: 300px;
    left: 40%;
    width: 20%;
    height: 80px;
    text-align: center;
  }
</style>
