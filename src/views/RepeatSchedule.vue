<template>
  <div>
    <div style="text-align: center; width: 100%;">
      <span style="font-size: large;">输入简单循环提醒信息</span>
    </div>
    <div class="form-container">
      <Form :model="formItem" :label-width="100">
        <FormItem label="提醒方式">
          <CheckboxGroup v-model="formItem.type">
            <Checkbox label="ww"><span>企业微信消息</span></Checkbox>
            <Checkbox label="sms" :disabled="!isSmsPermitted"><span>手机短信</span></Checkbox>
            <Icon v-if="!isSmsPermitted" type="ios-help"></Icon>
          </CheckboxGroup>
        </FormItem>

        <FormItem label="选择发送人员">
          <Input placeholder="点击选择" v-on:on-focus="show=true"
                 v-model="getShowUsers"></Input>
        </FormItem>

        <FormItem label="开始时间">
          <Checkbox label="ww" v-model="formItem.time.startNow"><span>立即开始</span></Checkbox>
          <template v-if="!formItem.time.startNow">
            <DatePicker type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="选择开始时间"
                        v-model="formItem.time.startAt" @on-change="formItem.date=$event"></DatePicker>
          </template>
        </FormItem>

        <FormItem label="时间间隔">
          <Input v-model="formItem.time.interval.day" class="intervalItem" type="number" number>
          <span slot="append">&nbsp;&nbsp;&nbsp;天</span>
          </Input>

          <Input v-model="formItem.time.interval.hour" class="intervalItem" type="number" number>
          <span slot="append">小时</span>
          </Input>

          <Input v-model="formItem.time.interval.minute" class="intervalItem" type="number" number>
          <span slot="append">分钟</span>
          </Input>

          <Input v-model="formItem.time.interval.second" class="intervalItem" type="number" number>
          <span slot="append">&nbsp;&nbsp;&nbsp;秒</span>
          </Input>

        </FormItem>
        <FormItem label="重复次数">
          <Checkbox label="ww" v-model="formItem.time.repeatForever" style="float: left;"><span>一直重复</span></Checkbox>
          <template v-if="!formItem.time.repeatForever">
            <Input v-model="formItem.time.count" style="width: 20%; float: left;" type="number" min="0" number>
            <span slot="prepend">重复</span>
            <span slot="append">次</span>
            </Input>
          </template>
        </FormItem>
        <FormItem label="消息类型">
          <RadioGroup v-model="formItem.data.type" type="button">
            <Radio label="text">文本消息</Radio>
            <Radio label="image" disabled>图片消息</Radio>
            <Radio label="voice" disabled>语音消息</Radio>
            <Radio label="video" disabled>视频消息</Radio>
            <Radio label="file" disabled>文件消息</Radio>
            <Radio label="textcard" disabled>文本卡片消息</Radio>
            <Radio label="news" disabled>图文消息</Radio>
            <Radio label="mpnews" disabled>图文消息</Radio>
          </RadioGroup>
        </FormItem>
        <template v-if="formItem.data.type === 'text'">
          <FormItem label="是否保密">
            <i-switch v-model="formItem.data.switch" size="large">
              <span slot="open">保密</span>
              <span slot="close">非保密</span>
            </i-switch>
          </FormItem>
          <FormItem label="消息内容">
            <Input v-model="formItem.data.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                   placeholder="Enter something..."></Input>
          </FormItem>
        </template>
        <FormItem>
          <Button type="primary" @click="submit" :loading="loading">保存</Button>
          <Button type="ghost" style="margin-left: 8px" :loading="loading">取消</Button>
        </FormItem>
      </Form>
      <ChooseUserDeptComponent v-bind:show="show" :checked="users" @on-ok="ok"
                               @on-cancel="cancel"></ChooseUserDeptComponent>
    </div>
  </div>
</template>

<script>
  import ChooseUserDeptComponent from '@/components/ChooseUserDeptComponent.vue'

  export default {
    name: "RepeatSchedule",
    data() {
      return {
        loading: false,
        users: [],
        show: false,
        formItem: {
          type: [],
          data: {
            type: 'text',
            switch: 0,
            content: ''
          },
          time: {
            startAt: '',
            startNow: false,
            interval: {
              day: 0,
              hour: 0,
              minute: 0,
              second: 0
            },
            count: 0,
            repeatForever: false
          }
        },
        isSmsPermitted: false
      }
    },
    components: {
      ChooseUserDeptComponent
    },
    computed: {
      getShowUsers() {
        var value = ''
        for (var i = 0; i < this.users.length; i++) {
          value += this.users[i].name + '  '
        }
        return value
      }
    },
    methods: {
      ok() {
        this.show = false
      }
      ,
      cancel() {
        this.show = false
      },
      submit() {
        this.loading = true
        //   this.$Message.error('获取数据失败');
        var data = {
          type: [],
          users: [],
          departments: [],
          tags: [],
          data: {
            type: 'text',
            safe: 0,
            content: ''
          },
          time: {
            startAt: '',
            startNow: false,
            interval: -1,
            count: 0,
            repeatForever: false
          }
        }

        data.time.interval = this.formItem.time.interval.day * 24 * 60 * 60 * 1000 + this.formItem.time.interval.hour * 60 * 60 * 1000 + this.formItem.time.interval.minute * 60 * 1000 + this.formItem.time.interval.second * 1000;
        if (data.time.interval < 0) {
          this.$Message.error('时间间隔不正确')
          this.loading = false
          return
        }
        this.formItem.time.interval.minute += Math.floor(this.formItem.time.interval.second / 60)
        this.formItem.time.interval.second = (this.formItem.time.interval.second - 60 * Math.floor(this.formItem.time.interval.second / 60))
        this.formItem.time.interval.hour += Math.floor(this.formItem.time.interval.minute / 60)
        this.formItem.time.interval.minute = (this.formItem.time.interval.minute - 60 * Math.floor(this.formItem.time.interval.minute / 60))
        this.formItem.time.interval.day += Math.floor(this.formItem.time.interval.hour / 24)
        this.formItem.time.interval.hour = (this.formItem.time.interval.hour - 24 * Math.floor(this.formItem.time.interval.hour / 24))

        if (this.formItem.time.count < 0) {
          this.$Message.error('重复次数不能小于0')
          this.loading = false
          return
        }

        data.type = this.formItem.type
        data.users = this.users
        data.time.startAt = this.formItem.time.startAt
        data.time.startNow = this.formItem.time.startNow
        data.time.count = this.formItem.time.count
        data.time.repeatForever = this.formItem.time.repeatForever
        data.data.type = this.formItem.data.type
        data.data.safe = this.formItem.data.switch ? 1 : 0
        data.data.content = this.formItem.data.content
        this.$http.post('http://remindapi.we.bjunicomsi.com:8080/jobs/message/add/repeat', {
          data
        }, {
          headers: {},
          emulateJSON: false
        }).then(function (response) {
          this.loading = false
          if (response.data.errcode == 0) {
            this.$Message.success(response.data.errmsg);
          } else if (response.data.errcode == 500) {
            this.$Message.error('服务器错误');
          } else {
            this.$Message.error(response.data.errmsg);
          }
        }), function (response) {
          this.loading = false
          this.$Message.error('请求失败');
        }
      }
    }
  }
</script>

<style scoped>
  .form-container {
    width: 100%;
    padding-left: 25%;
    padding-right: 25%;
  }

  .intervalItem {
    width: 15%;
    float: left;
    margin-right: 10px;
  }
</style>
