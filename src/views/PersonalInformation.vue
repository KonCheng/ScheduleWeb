<template>
  <div>
    <Tabs>
      <TabPane label="我的定时任务" name="mySchedule">
        <MySchedule></MySchedule>
      </TabPane>
      <TabPane label="个人信息" name="profile">
        <Profile></Profile>
      </TabPane>

    </Tabs>
  </div>

</template>

<script>
  import MySchedule from '@/components/MySchedule'
  import Profile from '@/components/Profile'

  export default {
    name: "PersonalInformation",
    components: {
      MySchedule,
      Profile
    },
    data() {
      return {
        id: this.$route.params.user,
        userId: 'ChenYong',
        jobs: []
      }
    },
    created() {
      this.$http.get('http://remindapi.we.bjunicomsi.com:8080/userinfo', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        var data = response.data
        if (data.errcode == 0) {
          this.userId = data.data.userId
          if (this.userId != this.id) {
            window.location.href = '/u/' + this.userId
          }
        } else {
          //     window.location.href = '/login'
        }
      }), function (response) {
      }
    },
    mounted() {
      if (this.userId != this.id) {
        return
      }

    },

  }
</script>

<style scoped>

</style>
