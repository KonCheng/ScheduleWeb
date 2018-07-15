<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        theme1: 'light',
        minHeight: 700,
        isLogin: false,
        name: '登录',
        avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
      }
    },
    mounted: function () {
    },
    computed: {
      getMinHeight() {
        return window.screen.availHeight * 0.75;
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-logo {
    width: 130px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    text-align: center;
    line-height: 30px
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .layout-user {
    width: 40px;
    height: 40px;
    background: #5b6270;
    border-radius: 40px;
    float: right;
    position: relative;
    top: 10px;
    right: 10px;
  }

  .layout-footer-center {
    text-align: center;
  }
</style>
