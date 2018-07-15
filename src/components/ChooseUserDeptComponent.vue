<template>
  <div>
    <Modal
      v-model="show"
      title="选择人员"
      @on-ok="ok"
      @on-cancel="cancel">
      <div>
        <div>
          <Tag v-for="user in checkedUsers">{{user.name}}</Tag>
        </div>
        <hr v-if="checkedUsers.length != 0" style="background-color: #e9eaec; margin-top: 10px; margin-bottom: 5px;"/>
        <Tree :data="allUsers" show-checkbox multiple ref="AllUsersTree" v-on:on-check-change="onCheckChange"></Tree>
      </div>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: "ChooseUserDeptComponent",
    props: {
      show: Boolean,
      checked: Array
    },
    data() {
      return {
        allUsers: [],
        checkedUsers: this.checked
      }
    },
    mounted: function () {
      var app = this
      this.$http.get('http://remindapi.we.bjunicomsi.com:8080/allusers', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        if (response.data.errcode == 0) {
          app.allUsers = response.data.data.allUsers
        } else {
          app.error(response.data.errmsg)
        }
      }), function (response) {
        app.error('数据获取失败')
      }
    },
    methods: {
      ok() {
        this.$emit('on-ok')
        // this.$emit('on-users-selected', this.$refs.AllUsersTree.getCheckedNodes())
      },
      cancel() {
        this.$emit('on-cancel')
      },
      getData() {
        /*this.$http.get('', {}, {
          headers: {},
          emulateJSON: true
        }).then(function (response) {

        }), function (response) {
          this.$Message.error('获取数据失败');
        }*/
      },
      onCheckChange() {
        var checkedNodes = this.$refs.AllUsersTree.getCheckedNodes()
        this.checkedUsers.splice(0, this.checkedUsers.length)
        for (var i = 0; i < checkedNodes.length; i++) {
          if (checkedNodes[i].type == 'user') {
            var checkedUser = {
              id: '',
              name: ''
            };
            checkedUser.id = checkedNodes[i].id
            checkedUser.name = checkedNodes[i].title
            this.checkedUsers.push(checkedUser)
          }
        }
      },
      error(msg) {
        this.$Message.error({
          content: msg,
          duration: 5,
          closable: true
        });
      },
      success(msg) {
        this.$Message.success(msg);
      }
    }
  }
</script>

<style scoped>

</style>
