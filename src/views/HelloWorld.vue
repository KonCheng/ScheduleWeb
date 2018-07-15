<template>
  <div class="hello">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" @on-select="onSelect">
          <div class="layout-logo">
            <span style="color: WHITE;">
              定时任务管理系统
            </span>
          </div>
          <template v-if="isLogin">
            <div class="layout-nav">
              <submenu name="1">
                <template slot="title">
                  <Icon type="stats-bars"></Icon>
                  普通任务
                </template>
                <MenuItem name="1_1">
                  <Icon type="ios-navigate"></Icon>
                  单次任务
                </MenuItem>
                <MenuItem name="1_2">
                  <Icon type="ios-navigate"></Icon>
                  简单循环
                </MenuItem>
              </submenu>

              <submenu name="2">
                <template slot="title">
                  <Icon type="stats-bars"></Icon>
                  高级任务
                </template>
                <MenuItem name="2_1">
                  <Icon type="ios-navigate"></Icon>
                  高级任务
                </MenuItem>
                <MenuItem name="2_2">
                  <Icon type="ios-navigate"></Icon>
                  从文件导入
                </MenuItem>
              </submenu>
              <MenuItem name="3">
                <Icon type="ios-paper"></Icon>
                我的信息
              </MenuItem>
            </div>
          </template>
          <Avatar class="layout-user" :src="avatar" size="large" @click="avatarClick">
            {{name}}
          </Avatar>
        </Menu>
      </Header>
      <Content :style="{padding: '20px 50px'}">
        <Card>
          <div :style="{minHeight: getMinHeight + 'px'}">
            <router-view/>
          </div>
        </Card>
      </Content>
      <Footer class="layout-footer-center">2018 &copy; 中国联合网络通信有限公司北京市分公司系统集成中心</Footer>

    </Layout>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '欢迎使用定时任务系统',
        theme1: 'light',
        minHeight: 700,
        isLogin: true,
        name: '登录',
        avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
        userId: ''
      }
    },
    mounted: function () {
      if (!this.isLogin) {

      }
      this.$http.get('http://remindapi.we.bjunicomsi.com:8080/userinfo', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        var data = response.data
        if (data.errcode == 0) {
          this.isLogin = true
          this.avatar = data.data.avatar
          this.name = data.data.name
          this.userId = data.data.userId
        } else {
          var code = getQueryString('code');
          var state = getQueryString('state');
          var url = 'http://remindapi.we.bjunicomsi.com:8080/login?code=' + code + '&state=' + state;
          if (code != '') {
            this.$http.post(url, {}, {
              headers: {},
              emulateJSON: true
            }).then(function (response) {
              var data = response.data;
              var ecode = data.errcode;
              if (ecode == 0) {
                localStorage.setItem("token", data.data.token)
                this.isLogin = true
                window.location.href = "http://remind.we.bjunicomsi.com:8080"
                this.success()
              } else {
                this.error("登录失败：" + response.data.errmsg)
              }
            }), function (response) {
              this.error("登录失败，请稍后再试")
            }
          } else {
       //     this.isLogin = false;
       //     window.location.href = "/login"
          }

        }
      }), function (response) {
     //   this.isLogin = false;
     //   window.location.href = "/login"
      }
    },
    computed: {
      getMinHeight() {
        return window.screen.availHeight * 0.75;
      }
    },
    methods: {
      error(msg) {
        this.$Message.info({
          content: msg,
          duration: 5,
          closable: true
        });
      },
      success() {
        this.$Message.info('登录成功');
      },
      onSelect(item) {
        switch (item) {
          case '1_1':
            window.location.href = '/onetime'
            break;
          case '1_2':
            window.location.href = '/repeat'
            break;
          case '2_1':
            window.location.href = '/corn'
            break;
          case '2_2':
            window.location.href = '/file'
            break;
          case '3':
            console.log("userId:" + this.userId)
            if (this.userId === '') {
              window.location.href = '/login'
              return
            }
            let url = '/u/' + this.userId
            window.location.href = url
            break
        }
      },
      avatarClick() {
        if (!this.isLogin) {
          window.location.href = '/login'
        }
      }
    }
  }

  function getQueryString(name) {
    var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
      return "";
    }
    return result[1];
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
