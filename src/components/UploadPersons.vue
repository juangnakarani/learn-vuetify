<template>
    <v-container fuild>
        <v-layout justify-center align-content-center>
            <v-snackbar :top="y === 'top'" :timeout="timeout" :color="color" :vertical="mode === 'vertical'" v-model="snackbar">
                {{ text }}
                <v-btn dark flat @click.native="snackbar = false">OK</v-btn>
            </v-snackbar>
            <v-flex lg1 sm1>
                <v-layout row wrap>
                    <v-form ref="form">
                        <v-flex lg12 sm12>

                            <input id="infile" type="file" ref="file" v-on:change="readfileloc">

                        </v-flex>
                        <!-- <v-flex lg8 sm8>
                                                    <v-spacer>
                                                    </v-spacer>
                                                </v-flex> -->
                        <v-flex lg12 sm12>
                            <v-btn :loading="loading3" @click.native="loader = 'loading3'" @click="upload" :disabled="loading3" color="blue-grey" dark>
                                Upload
                                <v-icon right dark>cloud_upload</v-icon>
                                <!-- <input type="file" @change="onFileChange" color="blue-grey" dark> -->
                            </v-btn>
                        </v-flex>
                    </v-form>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import router from '@/router/index.js'
import { HTTP } from '@/router/index'

export default {
    data: () => ({
        lorem: `Welcome to guest page. This page is non-protected endpoint(s)`,
        loading3: false,
        file: ``,
        snackbar: false,
        y: 'top',
        x: null,
        color: 'red',
        mode: '',
        timeout: 6000,
        text: '',
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
    methods: {
        readfileloc: function(e) {
            var file = (document.getElementById("infile").files[0])
            this.file = file.name
            console.log(this.file)
        },
        upload: function() {
            console.log("lagi upload gaes")
            var file = (document.getElementById("infile").files[0])
            console.log(file)
            if (file != null) {
                const config = {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': 'Bearer ' + this.token
                    }
                };
                // this is a boundary file, without it will be error :)
                let fd = new FormData();
                fd.append('file', file)
                HTTP.post(`/uploadfile`, fd, config)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        console.log(response.status)
                        if (response.status == 200) {
                            this.text = "File uploaded successfuly.."
                            this.color = "green"
                            this.snackbar = true
                            document.getElementById("infile").value = "";
                        }

                    })
                    .catch(e => {
                        console.log(e)
                        if (e.response.status == 400) {
                            this.color = "red"
                            this.text = "Oops.. upload size can't more than 1MB"
                            this.snackbar = true
                        }

                    })
            } else {
                this.color = "red"
                this.text = "pilih file yang akan di upload"
                this.snackbar = true
            }
        },
        clear() {
            this.$refs.form.reset()
        }
    },
    created: function() {
        console.log('token di admin:' + this.token)
        console.log('auth di admin:' + this.isauth)
        console.log('login di admin:' + this.islogin)
        if (this.isauth != true) {
            // router.push({ name: 'user', params: { userId: 123 }})
            router.push({ name: 'ErrorPage', params: { errnum: 401 } })

        } else {
            // TODO make request and check result for handle 401
            HTTP.get(`/uploadfile`, {
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