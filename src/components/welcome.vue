<template>
  <div class="welcome container">
  <div class="card">
    <div class="card-content center-align">
      <h2 class="teal-text">welcome</h2>
      <form @submit.prevent="enterChat">
        <label for="name">Enter your name:</label>
        <input type="text" name="name" v-model="name">
        <p v-if="feedback" class="red-text">{{feedback}}</p>
        <button class="btn teal">Enter Chat</button>
      </form>
    </div>
  </div>
   
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
     name:null,
     feedback:null
    }
  },
  methods:{
    enterChat(){
     // console.log(this.name)
     if(this.name){
       this.$router.push({ name:'chat' , params: {name:this.name } })

     }else{
       this.feedback='you must enter to name for join'
     }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
