<template>
  <div style="min-height: 400px;">
    <div>
      <Form ref="formItem" :model="formItem" inline>
        <FormItem label="开始时间">
          <DatePicker type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="选择开始日期时间"
                      v-model="formItem.startTime" @on-change="formItem.startTime=$event"></DatePicker>
        </FormItem>
        <FormItem label="结束时间">
          <DatePicker type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="选择结束日期时间"
                      v-model="formItem.endTime" @on-change="formItem.endTime=$event"></DatePicker>
        </FormItem>
        <Button type="primary" @click="submit" :loading="loading" style="line-height: 50px;">查询</Button>

      </Form>
    </div>
    <div class="table">
      <Row class="row">
        <Col span="4" style="width: 13%;">
          <span>名称</span>
        </Col>
        <Col span="4" style="width: 13%;">
          <span>组</span>
        </Col>
        <Col span="4" style="width: 13%;">
          <span>创建时间</span>
        </Col>
        <Col span="4" style="width: 13%;">
          <span>上次触发时间</span>
        </Col>
        <Col span="4" style="width: 13%;">
          <span>下次触发时间</span>
        </Col>
        <Col span="4" style="width: 30%;">
          <span>短信内容</span>
        </Col>
        <Col span="4" style="width: 5%;">
          <span>删除</span>
        </Col>
      </Row>
      <Row v-for="job in jobs" class="row">
        <Col span="4" style="width: 13%;">
          <span><a :href="'/j/' +job.group + '/' +job.name">{{job.name}}</a></span>
        </Col>
        <Col span="4" style="width: 13%;">
          <span><a :href="'/g/' + job.group">{{job.group}}</a></span>
        </Col>
        <Col span="4" style="width: 13%;">
          <span>{{job.gmtCreate}}</span>
        </Col>
        <Col span="4" style="width: 13%;">
          <p v-for="prev in job.prevFireTime"><span>{{ prev }}</span></p>
        </Col>
        <Col span="4" style="width: 13%;">
          <p v-for="next in job.nextFireTime"><span>{{ next }}</span></p>
        </Col>
        <Col span="4" style="width: 25%;">
          <p v-for="s in job.jobDetail.sms" class="content"><b style="color: #1c2438;">短信：</b><span
            style="color: #495060;">{{ s.content }}</span></p>
          <p class="content"><b style="color: #1c2438;">企业微信消息：</b><span style="color: #495060;">{{ job.jobDetail.ww.content }}</span>
          </p>
        </Col>
        <Col span="4" style="width: 5%;">
          <span>删除</span>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MySchedule",
    data() {
      return {
        jobs: [],
        loading: false,
        formItem: {
          startTime: '',
          endTime: ''
        }
      }
    },
    mounted() {
      this.$http.get('http://remindapi.we.bjunicomsi.com:8080/jobs/', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        if (response.data.errcode === 0) {
          this.jobs = response.data.data.jobs
        } else {
          this.$Message.error(response.data.errmsg)
        }
      }), function (response) {
        this.$Message.error('数据请求失败')
      }
    },
    computed: {},
    methods: {
      submit() {
        var app = this
        var url = 'http://remindapi.we.bjunicomsi.com:8080/jobs/?startTime=' + this.formItem.startTime + '&endTime=' + this.formItem.endTime
        this.$http.get(url, {
          startTime: app.formItem.startTime,
          endTime: app.formItem.endTime
        }, {
          headers: {},
          emulateJSON: true
        }).then(function (response) {
          if (response.data.errcode === 0) {
            this.jobs = response.data.data.jobs
          } else {
            this.$Message.error(response.data.errmsg)
          }
        }), function (response) {
          this.$Message.error('数据请求失败')
        }
      }
    }
  }
</script>

<style scoped>
  .row {
    border-bottom: 1px solid #e9eaec;
    line-height: 40px;
  }

  .table {
    border: 1px solid #e9eaec;
    padding: 5px 5px 0px 5px;
  }

  .content {
    line-height: 1.2em;
  }
</style>
