<template>
    <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field label="Username" v-model="username" required></v-text-field>
        <v-text-field label="Password" v-model="password" required></v-text-field>
        <v-btn color="primary" :right="false" @click="f_login" :disabled="false">Login</v-btn>
    </v-form>
</template>
<<script>
export default {
  data() {
      return {
        username:'',
        password:'',
        valid:true
      }
  }, methods: {
      f_login: function() {
          console.log("login...")
      }
  }
}
</script>
