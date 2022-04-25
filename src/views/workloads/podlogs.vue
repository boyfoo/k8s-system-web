<template>
  <div>
    <div style="padding-left: 20px;padding-top:30px">
      容器:
      <el-select @change="containerChange" placeholder="选择容器"
                 v-model="selectedContainer">
        <el-option v-for="c in containers "
                   :label="c.Name"
                   :value="c.Name"/>
      </el-select>
    </div>
    <div class="logs">
      {{ logs }}
    </div>
  </div>
</template>
<script>
import {getPodContainers, getPodsLogs} from "@/api/pods";
import request from '@/utils/request'

export default {
  data() {
    return {
      containers: [],
      selectedContainer: "",
      logs: ""
    }
  },
  created() {
    getPodContainers("default", "nginx-deployment-name01-646b9cdd57-lr8v6").then(rsp => {
      this.containers = rsp.data
    })
  },
  methods: {
    containerChange() {
      // getPodsLogs("default", "nginx-deployment-name01-646b9cdd57-lr8v6", this.selectedContainer)
      //   .then(rsp => {
      //     this.logs = rsp.data
      //   })
      const ns = "default"
      const podname = "nginx-deployment-name01-646b9cdd57-lr8v6"
      const cname = this.selectedContainer
      request({
        url: '/pods/logs?ns=' + ns + '&podname=' + podname + '&cname=' + cname,
        methods: 'GET',
        onDownloadProgress: e => {
          const dataChunk = e.currentTarget.response;
          this.logs += dataChunk
        }
      })
    }

  }
}
</script>
<style>
.logs {
  overflow: auto;

  margin: 10px auto;
  min-height: 200px;
  max-height: 400px;
  border: solid 1px black;
  background-color: #454545;
  padding: 10px;

  color: #27aa5e;
  line-height: 21pt;
  white-space: pre;
  width: 90%
}
</style>
