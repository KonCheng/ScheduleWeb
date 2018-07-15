<template>
  <div>
    <p><span style="font-size: large;">{{userInfo.name}}</span></p>
    <div style="margin-top: 10px;"><span style="float: left; line-height: 35px;">手机号：</span>
      <Input
        v-model="userInfo.mobile" :disabled="disabled" style="float: left; width: 300px;"></Input>
      <Button v-if="disabled" type="dashed" icon="edit" shape="circle" style="margin-left: 10px;"
              @click="disabled = !disabled">修改
      </Button>
      <Button v-if="!disabled" type="dashed" icon="edit" shape="circle" style="margin-left: 10px;" @click="submit">保存
      </Button>
      <Button v-if="!disabled" type="dashed" icon="edit" shape="circle" style="margin-left: 10px;"
              @click="cancel">取消
      </Button>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    data() {
      return {
        userInfo: {
          name: 'NAME',
          avatar: '',
          userId: '',
          mobile: '',
          oldMobile: ''
        },
        disabled: true
      }
    },
    mounted() {
      this.$http.get('http://remindapi.we.bjunicomsi.com:8080/userinfo', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        var data = response.data
        if (data.errcode == 0) {
          this.userInfo = data.data
          this.userInfo.oldMobile = data.data.mobile
        } else {
        }
      }), function (response) {
      }
    },
    methods: {
      submit() {
        var app = this
        this.$http.post('http://remindapi.we.bjunicomsi.com:8080/updateMobile', {
          mobile: app.userInfo.mobile
        }, {
          headers: {},
          emulateJSON: false
        }).then(function (response) {
          if (response.data.errcode === 0) {
            this.$Message.success(response.data.errmsg)
            app.userInfo.oldMobile = app.userInfo.mobile
            app.disabled = true
          } else {
            this.$Message.error(response.data.errmsg)
            this.userInfo.mobile = this.userInfo.oldMobile
            app.disabled = true
          }
        }), function (response) {
          this.$Message.error('请求失败，请重试！')
          this.userInfo.mobile = this.userInfo.oldMobile
          app.disabled = true
        }
      },
      cancel() {
        if (!this.disabled) {
          this.userInfo.mobile = this.userInfo.oldMobile
          this.disabled = !this.disabled
        }
      }
    }
  }
</script>

<style scoped>

</style>
