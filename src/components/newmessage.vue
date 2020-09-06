<template>
    <div class="new-message">
        <form @submit.prevent="addmessage">
            <label for="new-meassage">New Message(enter to add)</label>
            <input type="text" name="new-message" v-model="newMessage">
                <p v-if="feedback" class="red-text">{{feedback}}</p>
        </form>
    </div>
</template>
<script>
import db from '@/firebase/init'

export default {
    name:'newmessage',
    props:['name'],
    data(){
        return{
            newMessage:null,
            feedback:null
        }
    },
    methods:{
        addmessage(){
            //console.log(this.newMessage ,this.name ,Date.now())
            if(this.newMessage){
                db.collection('messages').add({
                    content:this.newMessage,
                    name:this.name,
                    timestamp:Date.now()
                }).catch(err =>{
                    console.log(err)
                })
                this.newMessage=null
                this.feedback=null
            }else{
                this.feedback="you must enter a message in order to send"
            }
        }
    }
}
</script>