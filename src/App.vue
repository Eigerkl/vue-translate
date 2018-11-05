<template>
  <div id="app">
    <h1>在线翻译</h1>
    <translateForm v-on:formSubmit="translateText"></translateForm>
    <translateOutput v-text="translatedText"></translateOutput>
  </div>
</template>

<script>
import TranslateForm from './components/TranslateForm'
import TranslateOutput from './components/TranslateOutput'

export default {
  name: 'App',
  data(){
    return{
      translatedText:""
    }
  },
  methods:{
    translateText:function (text,language) {
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20181105T074815Z.43d5873b2860c21e.a67b6907e63ea552e4cbb16e820a66970a2624c2&text='+text+'&lang='+language)
        .then((response)=>{
          console.log(response);
          this.translatedText=response.body.text[0];
        })
    }
  },

  /*mounted(){
    //axios
    this.$axios.post("/api/test/testToken.php",{username:"admin",password:"12345"})
      .then(data => {
        console.log(data)
      })
      .catch(error=>console.log(error))
    /!*this.$axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
*!/
  },*/
  components:{
    TranslateForm,
    TranslateOutput
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
