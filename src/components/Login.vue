<template>
    <v-container>
        <v-layout justify-center align-content-center>
                <img src='../assets/vueconf.png' />
        </v-layout>
        <!-- <v-flex xs1></v-flex> -->
        <v-layout justify-center align-content-center>
            <!-- <v-flex  xs3> -->
                <v-form v-model="valid" ref="form" lazy-validation>
                    <v-text-field label="Username" v-model="username" required></v-text-field>
                    <v-text-field label="Password" v-model="password" required></v-text-field>
                    <v-btn color="primary" @click="f_login" :disabled="false">Login</v-btn>
                </v-form>
            <!-- </v-flex> -->
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
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
