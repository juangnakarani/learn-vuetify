<template>
    <v-container grid-list-md>
        <v-snackbar :top="y === 'top'" :timeout="timeout" :color="color" :multi-line="mode === 'multi-line'" :vertical="mode === 'vertical'" v-model="snackbar">
            {{ snackbartext }}
            <v-btn dark flat @click.native="snackbar = false">OK</v-btn>
        </v-snackbar>
        <v-layout justify-center align-content-center>
            <v-flex lg4 sm4>
                <v-form v-model="valid" ref="form" lazy-validation>
                    <v-card color="grey lighten-3" flat>
                        <v-card-text>
                            <v-layout row wrap>
                                <v-flex lg6 sm6>
                                    <v-text-field label="First Name" v-model="firstname" :counter="10" :rules="firstnameRules" required></v-text-field>
                                </v-flex>
                                <v-flex lg6 sm6>
                                    <v-text-field label="Last Name" v-model="lastname" :counter="10" :rules="lastnameRules" required></v-text-field>
                                </v-flex>
                                <v-flex lg6 sm6>
                                    <v-text-field label="Username" v-model="username" :rules="usernameRules" required></v-text-field>
                                </v-flex>
                                <v-flex lg6 sm6>
                                    <v-spacer></v-spacer>
                                </v-flex>
                                <v-flex lg6 sm6>
                                    <v-text-field name="input-passwd" label="Password" v-model="password" :type="isPassword ? 'password' : 'text'" :append-icon="isPassword ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (isPassword = !isPassword)" required></v-text-field>
                                </v-flex>
                                <v-flex lg6 sm6>
                                    <v-text-field name="confirm-passwd" label="Confirm Password" v-model="cfrmPassword" :type="isCPassword ? 'password' : 'text'" :append-icon="isCPassword ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (isCPassword = !isCPassword)" required></v-text-field>
                                </v-flex>
                                <v-flex lg6 sm6>
                                    <v-text-field label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
                                </v-flex>
                                <v-flex lg6 sm6>
                                    <v-spacer></v-spacer>
                                </v-flex>
                                <v-flex lg6 sm6>
                                    <v-select autocomplete label="Language" v-model="language" v-bind:items="languages" :rules="languageRules" required></v-select>
                                </v-flex>
                                <v-flex lg6 sm6>
                                    <v-spacer></v-spacer>
                                </v-flex>
                                <v-flex lg6 sm6>
                                    <v-text-field label="Phone" v-model="phone" :rules="phoneRules" required></v-text-field>
                                </v-flex>
                                <v-flex lg6 sm6>
                                    <v-spacer></v-spacer>
                                </v-flex>
                                <v-flex lg4 sm4>
                                    <v-select label="Gender" v-model="gender" :items="genders"></v-select>
                                </v-flex>
                                <v-flex lg8 sm8>
                                    <v-spacer></v-spacer>
                                </v-flex>
                                <v-flex lg4 sm4>
                                    <v-select autocomplete label="Location" v-model="location" v-bind:items="locations" :rules="locationRules" required></v-select>
                                </v-flex>
                                <v-flex lg8 sm8>
                                    <v-spacer></v-spacer>
                                </v-flex>
                                <v-btn color="primary" @click="register" :disabled="false">Submit</v-btn>
                                <v-btn color="error" :disabled="false">Cancel</v-btn>
                            </v-layout>
                        </v-card-text>
                    </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import { HTTP } from '@/router/index'

export default {
    data: () => ({
        valid: true,
        textcard: `Add Persons Protected Endpoints`,
        firstname: ``,
        firstnameRules: [
            v => !!v || 'Firstname is required'
        ],
        lastname: ``,
        lastnameRules: [
            v => !!v || 'Lastname is required'
        ],
        username: ``,
        usernameRules: [
            v => !!v || 'Username is required'
        ],
        language: ``,
        languages: [
            'Java', 'Golang', 'Python', 'C#', 'Ruby', 'JavaScript', 'Perl'
        ],
        languageRules: [
            v => !!v || 'Username is required'
        ],
        location: ``,
        locations: [
            'Indonesia', 'Malaysia', 'Singapore', 'Japan', 'China'
        ],
        locationRules: [
            v => !!v || 'Firstname is required'
        ],
        gender: ``,
        genders: [
            'Male', 'Female', 'Other', 'Rather not Say'
        ],
        isPassword: true,
        password: ``,
        isCPassword: true,
        cfrmPassword: ``,
        email: '',
        emailRules: [
            v => {
                return !!v || 'E-mail is required'
            },
            v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        phone: ``,
        phoneRules: [
            v => !!v || 'Username is required'
        ],
        snackbar: false,
        y: 'top',
        color: '',
        mode: '',
        timeout: 6000,
        snackbartext: ''
    }),
    computed: {
        fixphone: function() {
            if (this.phone == "") {
                return null
            } else {
                return this.phone
            }
        }
    }
    ,
    methods: {
        register: function() {
            if (this.$refs.form.validate()) {
                let register = {
                    'username': this.username,
                    'firstname': this.firstname,
                    'lastname': this.lastname,
                    'language': this.language,
                    'phone': this.fixphone,
                    'email': this.email,
                    'gender': this.gender,
                    'location': this.location,
                    'password': this.password
                }

                HTTP.post(`/registration`, register)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        console.log(response.status)
                        this.clear()
                    })
                    .catch(e => {
                        console.log(e)
                    })
            } else {
                this.color = 'red'
                this.snackbartext = "Oops.. please check the incorrect input..!"
                this.snackbar = true
            }
        },
        clear() {
            this.color = 'green'
            this.snackbartext = "Input success.."
            this.snackbar = true
            this.$refs.form.reset()
        }
    }
}
</script>