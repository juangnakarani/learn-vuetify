<template>
    <v-container>
        <!-- <v-layout justify-center align-content-center>
                   
            </v-layout> -->
        <!-- <v-flex xs1></v-flex> -->

        <v-layout justify-center align-content-center>
            <!-- <v-flex xs4> -->
            <img src='../assets/vueconf.png' class="mr-5"/>
             <!-- </v-flex> -->
            <!-- <v-spacer></v-spacer> -->
            <v-flex lg3 sm3 xs3>
            <v-form ref="form" lazy-validation>
                <v-text-field label="Username" v-model="username" required :error="isErrorUsr" @focus="clearErrUsr"></v-text-field>
                <v-text-field name="input-passwd" label="Password" v-model="password" :error="isErrorPasswd" @focus="clearErrPasswd" :type="isPassword ? 'password' : 'text'" :append-icon="isPassword ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (isPassword = !isPassword)" required></v-text-field>
                <v-btn color="primary" @click="getToken" :disabled="false">Login</v-btn>
            </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import store from '@/vuex/store.js'
import router from '@/router/index.js'
import { HTTP } from '@/router/index'

export default {
    data() {
        return {
            username: '',
            password: '',
            isPassword: true,
            isErrorUsr: false,
            isErrorPasswd: false
        }
    }, 
    store,
    methods: {
        changeTkn: function(event) {
            this.$store.commit('changeToken', event.target.value)
        },
        clearErrUsr: function(){
            this.isErrorUsr = false
        },
        clearErrPasswd: function(){
            this.isErrorPasswd = false
        }
        ,
        getToken: function() {
            let username = this.username
            let password = this.password
            let login = { 'username': username, 'password': password }

            HTTP.post(`/login`, login)
                .then(response => {
                    // JSON responses are automatically parsed.
                    console.log(response.status)
                    console.log(response.data.token)
                    if(response.status=200){
                        this.$store.commit('changeToken', response.data.token)
                        this.$store.commit('setIsAuth', true)
                        this.$store.commit('setIsLogin', true)
                        router.push({ path: '/settings' })
                    }
                })
                .catch(e => {
                    console.log(e)
                    this.isErrorUsr = true
                    this.isErrorPasswd = true
                })
        }
    }
}
</script>
