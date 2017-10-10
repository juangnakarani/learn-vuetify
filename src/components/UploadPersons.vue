<template>
    <v-container fuild>
        <v-layout row wrap>
            <!-- <v-flex xs4>
                        <v-subheader>Normal with hint text</v-subheader>
                    </v-flex> -->
            <v-flex xs12 sm5>
                <v-text-field name="input-1-3" label="this is file location" single-line prepend-icon="attachment"></v-text-field>
            </v-flex>
            <v-flex xs12 sm3>
                <v-btn :loading="loading3" @click.native="loader = 'loading3'" :disabled="loading3" color="blue-grey" dark>
                    browse
                    <v-icon right dark>folder_open</v-icon>
                </v-btn>
                <v-btn :loading="loading3" @click.native="loader = 'loading3'" :disabled="loading3" color="blue-grey" dark>
                    Upload
                    <v-icon right dark>cloud_upload</v-icon>
                </v-btn>
                <input type="file" @change="onFileChange" :v-btn="primary">
            </v-flex>
        </v-layout>

    </v-container>
</template>
<script>
export default {
    data: () => ({
        lorem: `Welcome to guest page. This page is non-protected endpoint(s)`
    })
}
</script>