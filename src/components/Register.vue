<template>
    <v-container fuild>
        <v-layout justify-center>
            <v-flex xs3>
            <v-form v-model="valid">
                <v-text-field label="First Name" v-model="name" :rules="nameRules" :counter="10" required></v-text-field>
                <v-text-field label="Last Name" v-model="name" :rules="nameRules" :counter="10" required></v-text-field>
                <v-text-field label="Username" v-model="name" :rules="nameRules" required></v-text-field>
                <v-text-field label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
                <v-select label="Language" v-model="language" v-bind:items="languages" :rules="emailRules" required></v-select>
                <v-text-field label="Phone" v-model="email" :rules="emailRules" required></v-text-field>
                <v-select label="Gender" v-model="gender" :items="genders" :rules="emailRules"></v-select>
                 <v-select label="Location" v-model="location" v-bind:items="locations" :rules="emailRules" required></v-select>
                <v-btn color="primary" @click="f_login" :disabled="false">Submit</v-btn>
                <v-btn color="error" @click="f_login" :disabled="false">Cancel</v-btn>
            </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        lorem: `Add Persons Protected Endpoints`,
        language: ``,
        languages: [
            'Java', 'Golang', 'Python','C#','Ruby', 'JavaScript', 'Perl'
        ],
        location: ``,
        locations: [
            'Indonesia', 'Malaysia', 'Singapore', 'Japan', 'China'
        ],
        gender:``,
        genders: [
            'Male', 'Female', 'Other', 'Rather not Say'
        ]
    })
}
</script>