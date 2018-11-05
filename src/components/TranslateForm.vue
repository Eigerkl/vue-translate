<template>
    <div id="translateForm">
      <form action="" class="demo-input-suffix" v-on:submit="formSubmit">

          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="textToTranslate">
          </el-input>

          <el-select v-model="language">
            <el-option v-for="item in langList" :key="item.value" :value="item.value" :label="item.label"></el-option>
            <!--<el-option value="en">English</el-option>
            <el-option value="ru">Russian</el-option>
            <el-option value="ko">Korean</el-option>-->

          </el-select>
          <input type="submit" value="翻译">
        


      </form>

    </div>
</template>

<script>
    export default {
        name: "TranslateForm",
        data(){
          return{
            textToTranslate:"",
            language:"",
            langList:[{
              value:'en',
              label:'English'
            },{
              value:'ru',
              label:'Russian'
            },{
              value:'ko',
              label:'Korean'
            }]
          }
        },
        methods:{
          formSubmit:function (e) {
            //alert(this.textToTranslate);
            this.$emit("formSubmit",this.textToTranslate,this.language);
            e.preventDefault();//取消默认事件
          }
        },
        created:function(){
          this.language='en'
        }

    }
</script>

<style scoped>

</style>
