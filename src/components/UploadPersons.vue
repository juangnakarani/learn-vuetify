<template>
    <v-container fuild>
        <v-snackbar :top="y === 'top'" :timeout="timeout" :color="color" :vertical="mode === 'vertical'" v-model="snackbar">
            {{ text }}
            <v-btn dark flat @click.native="snackbar = false; clearErrUsr(), clearErrPasswd()">OK</v-btn>
        </v-snackbar>
        <v-layout row wrap>
            <!-- <v-flex xs4>
                                                                <v-subheader>Normal with hint text</v-subheader>
                                                            </v-flex> -->
            <v-form v-model="valid">
                <v-flex lg 12 xs12 sm5>
                    <v-text-field name="input-1-3" label="this is file location" v-model="file.name" single-line prepend-icon="attachment"></v-text-field>
                </v-flex>
                <v-flex lg 12 xs12 sm5>
                    <input id="anu" type="file" ref="file" v-on:change="readfileloc">
                    <v-btn :loading="loading3" @click.native="loader = 'loading3'" @click="upload" :disabled="loading3" color="blue-grey" dark>
                        Upload
                        <v-icon right dark>cloud_upload</v-icon>
                        <!-- <input type="file" @change="onFileChange" color="blue-grey" dark> -->
                    </v-btn>
                </v-flex>
            </v-form>
        </v-layout>

    </v-container>
</template>
<script>
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
            text: 'Ups.. upload cannot more than 5MB',
    }),
    methods: {
        readfileloc: function(e) {
            var file = (document.getElementById("anu").files[0])
            this.file = file.name
            console.log(this.file)
        },
        upload: function() {
            console.log("lagi upload gaes")
            var file = (document.getElementById("anu").files[0])
            console.log(file)
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            // this is a boundary file, without it will be error :)
            let fd = new FormData();
            fd.append('file',file)
            HTTP.post(`/uploadfile`,fd, config)
                .then(response => {
                    // JSON responses are automatically parsed.
                    console.log(response.status)
                    // this.clear()
                })
                .catch(e => {
                    console.log(e)
                    this.snackbar = true
                })
        }
    }
}
</script>