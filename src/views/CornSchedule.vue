<template>
  <div>
    <div style="text-align: center; width: 100%;">
      <span style="font-size: large;">根据提示编辑信息</span>
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
          <Input placeholder="Enter something..." v-on:on-focus="show=true"
                 v-model="getShowUsers"></Input>
        </FormItem>

        <FormItem label="提醒时间">
          <CornExpression v-model="formItem.time" :expression="true" :example="false"
                          :editable="false"></CornExpression>
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
        <template v-if="formItem.data.type === 'image'">
          <FormItem label="是否保密">
            <i-switch v-model="formItem.switch" size="large">
              <span slot="open">保密</span>
              <span slot="close">非保密</span>
            </i-switch>
          </FormItem>
          <FormItem label="选择图片">
            <Upload action="//jsonplaceholder.typicode.com/posts/">
              <Button type="ghost" icon="ios-cloud-upload-outline">上传图片</Button>
            </Upload>
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
  import CornExpression from '@/components/CornExpression.vue'

  export default {
    name: "CornSchedule",
    data() {
      return {
        loading: false,
        users: [],
        show: false,
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          type: [],
          date: '',
          time: '0 0 9 * * ? *',
          slider: [20, 50],
          data: {
            type: 'text',
            switch: true,
            content: ''
          }
        },
        isSmsPermitted: false
      }
    },
    components: {
      ChooseUserDeptComponent,
      CornExpression
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
          time: '',
          data: {
            type: '',
            safe: 0,
            content: ''
          }
        }
        data.type = this.formItem.type
        data.users = this.users
        data.time = this.formItem.time
        data.data.type = this.formItem.data.type
        data.data.safe = this.formItem.data.switch ? 1 : 0
        data.data.content = this.formItem.data.content

        console.log(JSON.stringify(data))
        this.$http.post('http://remindapi.we.bjunicomsi.com:8080/jobs/message/add/corn', {
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
</style>
