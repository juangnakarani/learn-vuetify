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
            <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field label="Username" v-model="username" required></v-text-field>
                <v-text-field name="input-passwd" label="Password" v-model="password" :type="isPassword ? 'password' : 'text'" :append-icon="isPassword ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (isPassword = !isPassword)" :rules="nameRules" required></v-text-field>
                <v-btn color="primary" @click="f_login" :disabled="false">Login</v-btn>
            </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            isPassword: true,
            valid: true
        }
    }, methods: {
        f_login: function() {
            console.log("login...")
        }
    }, created: {

    }
}
</script>
