<template>
    <v-container fuild>
        <v-layout justify-center>
            <v-form v-model="valid">
                <v-text-field label="Name" v-model="name" :rules="nameRules" :counter="10" required></v-text-field>
                <v-text-field label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
                <v-text-field label="City" v-model="email" :rules="emailRules" required></v-text-field>
                <v-text-field label="Languange" v-model="email" :rules="emailRules" required></v-text-field>
                <v-btn color="primary" @click="f_login" :disabled="false">Submit</v-btn>
                <v-btn color="error" @click="f_login" :disabled="false">Cancel</v-btn>
            </v-form>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        lorem: `Add Persons Protected Endpoints`
    })
}
</script>