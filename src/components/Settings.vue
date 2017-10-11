<template>
  <v-container fuild>
    <v-layout justify-center align-content-center>
      <img src='../assets/guest.png' />
    </v-layout>
    <v-layout justify-center>
      <v-card color="red" dark>
        <v-card-text v-text="lorem">
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
import router from '@/router/index.js'
import { HTTP } from '@/router/index'

export default {
  data: () => ({
    lorem: `Welcome to admin page. This page is protected endpoints`
  }),
  computed: {
    token: function() {
      return this.$store.getters.getToken
    },
    isauth: function() {
      return this.$store.getters.getIsAuth
    },
    islogin: function() {
      return this.$store.getters.getIsLogin
    }
  },
  created: function() {
    // console.log('a is: ' + this.msg)
    console.log('token di admin:' + this.token)
    console.log('auth di admin:' + this.isauth)
    console.log('login di admin:' + this.islogin)
    // TODO check is auth == true
    if (this.isauth != true) {
      // router.push({ name: 'user', params: { userId: 123 }})
      router.push({ name: 'ErrorPage', params: {errnum:401}})

    } else {
      // TODO make request and check result for handle 401
      HTTP.get(`/admin`, {
        withCredentials: true,
        timeout: 1000,
        headers: {
          'Authorization': 'Bearer ' + this.token,
        }
      })
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>