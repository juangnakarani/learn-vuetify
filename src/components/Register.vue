<template>
    <v-container grid-list-md>
        <v-layout justify-center align-content-center>
            <v-flex lg4 sm4>
                <v-form>
                    <v-card color="grey lighten-3" flat>
                        <v-card-text>
                            <v-layout row wrap>
                                <v-flex lg6 sm6>
                                    <v-text-field label="First Name" v-model="firstname" :counter="10" required></v-text-field>
                                </v-flex>
                                <v-flex lg6 sm6>
                                    <v-text-field label="Last Name" v-model="lastname" :counter="10" required></v-text-field>
                                </v-flex>
                                <v-flex lg6 sm6>
                                    <v-text-field label="Username" v-model="username" required></v-text-field>
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
                                    <v-select autocomplete label="Language" v-model="language" v-bind:items="languages" required></v-select>
                                </v-flex>
                                <v-flex lg6 sm6>
                                    <v-spacer></v-spacer>
                                </v-flex>
                                <v-flex lg6 sm6>
                                    <v-text-field label="Phone" v-model="phone" required></v-text-field>
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
                                    <v-select autocomplete label="Location" v-model="location" v-bind:items="locations" required></v-select>
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
        lorem: `Add Persons Protected Endpoints`,
        firstname: ``,
        lastname: ``,
        username: ``,
        language: ``,
        languages: [
            'Java', 'Golang', 'Python', 'C#', 'Ruby', 'JavaScript', 'Perl'
        ],
        location: ``,
        locations: [
            'Indonesia', 'Malaysia', 'Singapore', 'Japan', 'China'
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
        phone: ``
    }),
    computed: {
        fixphone: function(){
            if(this.phone==""){
                return null
            }else{
                return this.phone
            }
        }
    }
    ,
    methods: {
        register: function() {
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
                    console.log(response.data.token)
                    // if (response.status = 200) {
                    //     this.$store.commit('changeToken', response.data.token)
                    //     this.$store.commit('setIsAuth', true)
                    //     this.$store.commit('setIsLogin', true)
                    //     router.push({ path: '/settings' })
                    // }
                })
                .catch(e => {
                    console.log(e)
                    // this.isErrorUsr = true
                    // this.isErrorPasswd = true
                })
        }
    }
}
</script>