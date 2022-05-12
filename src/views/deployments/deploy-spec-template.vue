<template>
  <div>
    <el-card class="box-card" body-style="padding:10px">
      <div slot="header" class="clearfix" >
        <span>POD模板 <Expand :expand.sync="expand"/>  </span>
      </div>
      <div v-show="expand">
        <div>
          <el-form   >
            <el-form-item  >
              <MetaData labels="true" :data.sync="template.metadata" :tips="tips"/>
            </el-form-item>
            <el-form-item>
              <Container :data.sync="template.spec.containers" :tips="tips"/>
            </el-form-item>
          </el-form>

        </div>
      </div>

    </el-card>
  </div>
</template>
<script>

  import {initIfNil} from  "../../utils/helper";
  function copyObject(obj){
    var str=JSON.stringify(obj)
    return JSON.parse(str)
  }
  export default {
    props:["data","tips"],
    data(){
      return {
        template:{metadata:{},spec:{containers:[]},},//
        expand: true,
      }
    },
    created(){

    },
    methods:{


    },
    watch:{
      data:{
        handler:function(newVal,oldVal) {
        //  newVal=initIfNil(newVal,"spec.containers",[])
          this.template=newVal


        },
        deep: true
      },
      template:{
        handler:function(newVal,oldVal) {

          this.$emit("update:data",newVal)
        },
        deep: true
      },
    },
    components:{
      Expand:()=>import("./card-expand.vue"),
      MetaData:()=>import('./deploy-metadata.vue'),
      Container:()=>import("./deploy-spec-template-container.vue")
    }


  }
</script>
