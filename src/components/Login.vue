<template>
    <v-container :fill-hight="true">
        <v-snackbar :top="y === 'top'" :timeout="timeout" :color="color" :vertical="mode === 'vertical'" v-model="snackbar">
            {{ text }}
            <v-btn dark flat @click.native="snackbar = false; clearErrUsr(), clearErrPasswd()">OK</v-btn>
        </v-snackbar>
        <!-- <v-layout justify-center>
                            <v-flex lg6 >
                                <v-alert app fixed clipped-left color="error" icon="warning" :value="alert" transition="scale-transition">
                                    Ups.. sorry try again using correct username and password.
                                </v-alert>
                            </v-flex>
                        </v-layout> -->
        <!-- <v-container justify-center align-content-center> -->
        <v-layout justify-center>
            <img src='../assets/vueconf.png' class="mr-5" />
            <v-flex lg3 sm3 xs3>
                <v-form ref="form" lazy-validation>
                    <v-text-field id="lblusr" label="Username" v-model="username" required :error="isErrorUsr" @focus="clearErrUsr" :rules="usernameRules" required></v-text-field>
                    <v-text-field name="input-passwd" label="Password" v-model="password" :error="isErrorPasswd" @focus="clearErrPasswd" :type="isPassword ? 'password' : 'text'" :append-icon="isPassword ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (isPassword = !isPassword)" :rules="passwordRules" required></v-text-field>
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
            usernameRules: [
                v => !!v || 'Username is required'
                // v => {
                //     if (!v) {
                //         this.errrequired = true
                //         return 'Username is required'
                //     } else {
                //         this.errrequired = false
                //     }
                // }
            ],
            password: '',
            passwordRules: [
                v => !!v || 'Password is required'
                // v => {
                //     if (!v) {
                //         this.errrequired = true
                //         return 'Password is required'
                //     } else {
                //         this.errrequired = false
                //     }
                // }
            ],
            isPassword: true,
            isErrorUsr: false,
            isErrorPasswd: false,
            snackbar: false,
            y: 'top',
            x: null,
            color: 'red',
            mode: '',
            timeout: 6000,
            text: 'Ups.. Try again using correct username and password. Use admin/admin to access protected endpoint(s)',
            errrequired: false
        }
    },
    store,
    methods: {
        changeTkn: function(event) {
            this.$store.commit('changeToken', event.target.value)
        },
        clearErrUsr: function() {
            this.isErrorUsr = false
            // this.alert = false
            this.snackbar = false
            document.getElementById("lblusr").focus();
        },
        clearErrPasswd: function() {
            this.isErrorPasswd = false
            // this.alert = false
            this.snackbar = false
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
                    
                    if (response.status = 200) {
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
                    this.snackbar = true
                })
        }
    }
}
</script>
