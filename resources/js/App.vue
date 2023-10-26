<template>
    <div v-if="loggedIn">
        <button @click="logout">Logout</button>
        <h2>The name is {{ user.name }}</h2>
        <h2> the email is {{ user.email }}</h2>
        <img :src="user.picture"/>
    </div>
    <div v-else>
        <h3>login</h3>
        <GoogleLogin :callback="callback" prompt auto-login/>
    </div>
  </template>

  <script>
    import { decodeCredential, googleLogout } from 'vue3-google-login'
export default{
    data(){
        console.log('hi')
        return {
            loggedIn: false,
            user:null,
            callback:(response) => {
                this.loggedIn = true;
                console.log("logged in")
                console.log(response)
                this.user = decodeCredential(response.credential);
            }
        }
    },
    methods:{
        logout(){
            googleLogout()
            this.loggedIn=false;
        }
    }
}
  </script>

  <style>
  /* Add your global styles here */
  </style>
