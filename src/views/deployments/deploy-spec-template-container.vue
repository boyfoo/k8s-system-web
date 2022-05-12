<template>
  <div>
    <el-card class="box-card" body-style="padding:10px">
      <div slot="header" class="clearfix" >
        <span>容器配置  <Expand :expand.sync="expand"/>
          <i class="ii el-icon-circle-plus"  @click="containers.push({name:'mycontainer',image:'',ports:[]})" ></i>  </span>
      </div>
      <div v-show="expand">
        <div>
          <el-form >
            <el-form-item  >
              <el-form style="margin-bottom: 20px" :inline="true" v-for="(item,cindex) in containers">
                <el-form-item label="容器名">
                  <el-input v-model="item.name" />
                </el-form-item>
                <el-form-item label="镜像">
                  <el-select  filterable
                              allow-create
                              style="width:200px" placeholder="如nginx:1.18-alpine" v-model="item.image">
                    <el-option v-for="image in images" :label="image" :value="image"/>
                  </el-select>
                  <el-button type="primary" style="margin-left: 20px"  @click="containers.splice(cindex,1)"><i class="el-icon-minus"  ></i></el-button>

                </el-form-item>
                <el-form-item label="端口设置" style="width: 100%">
                  <el-form-item  >
                    <i class="ii el-icon-circle-plus"
                       @click="containers[cindex].ports.push({name:'httpport',containerPort:80})" ></i>
                  </el-form-item>
                  <el-form v-for="(port,portindex) in item.ports">
                    <el-form-item label="名称">
                      <el-input v-model="port.name" />
                    </el-form-item>
                    <el-form-item label="容器端口">
                      <el-input-number v-model="port.containerPort" />
                      <span v-show="tips">一般填程序监听的端口</span>
                    </el-form-item>
                  </el-form>
                </el-form-item>

              </el-form>
            </el-form-item>

          </el-form>

        </div>
      </div>

    </el-card>
  </div>
</template>
<script>
  import {images} from "@/utils/vars";

  export default {
    props:["data","tips"],
    data(){
      return {
        containers:[],//
        expand: true,
        images:[],//内置的一些image
      }
    },
    created(){
      this.images=images
    },
    methods:{
    },
    watch:{
      data:{
        handler:function(newVal,oldVal) {
          this.containers=newVal

        },
        deep: true
      },
      containers:{
        handler:function(newVal,oldVal) {
          this.$emit("update:data",newVal)
        },
        deep: true
      },
    },
    components:{
      Expand:()=>import("./card-expand.vue"),
      MetaData:()=>import('./deploy-metadata.vue'),

    }


  }
</script>
