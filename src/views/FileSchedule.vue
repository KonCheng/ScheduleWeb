<template>
  <div>
    <Card class="content">
      <Upload
        :format="['xlsx','xls']"
        :headers=headers
        :on-success="onUploadSuccess"
        :show-upload-list="showUploadList"
        :max-size="maxSize"
        name="file"
        type="drag"
        action="http://111.206.102.133:8080/file/upload">
        <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>点击或拖动文件到本框上传文件</p>
        </div>
      </Upload>
      <div class="model"><a href="http://remind.we.bjunicomsi.com:8080/static/file/文件导入模板.xlsx">下载模版</a></div>
    </Card>
  </div>
</template>

<script>
  export default {
    name: "FileSchedule",
    data() {
      return {
        headers: {
          Authorization: localStorage.getItem("token"),
          enctype: 'multipart/form-data'
        },
        fileId: 0,
        maxSize: 10240,
        showUploadList: false
      }
    },
    methods: {
      onUploadSuccess(response, file, fileList) {
        if (response.errcode == 0) {
          this.fileId = response.data.fileId
          this.resolv()
        } else {
          this.error('文件上传失败：' + response.errmsg)
        }
      }, error(msg) {
        this.$Message.error({
          content: msg,
          duration: 5,
          closable: true
        });
      },
      success(msg) {
        this.$Message.success(msg);
      },
      resolv() {
        if (this.fileId <= 0) {
          return
        }
        var url = 'http://remindapi.we.bjunicomsi.com:8080/jobs/message/add/file?id=' + this.fileId;
        this.$http.get(url, {}, {
          headers: {},
          emulateJSON: true
        }).then(function (response) {
          var data = response.data
          if (data.errcode == 0) {
            this.success(data.errmsg)
          } else {
            this.error(data.errmsg)
          }
        }), function (response) {
          this.error('文件解析失败')
        }
      }
    }
  }
</script>

<style scoped>
  .content {
    width: 30%;
    position: relative;
    top: 200px;
    left: 35%;
    text-align: center;
  }

  .model {
    margin-top: 10px;
  }
</style>
