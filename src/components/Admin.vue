<template>
    <v-container fuild>
        <v-layout justify-center align-content-center>
                <img src='../assets/admin.png' />
        </v-layout>
        <v-layout justify-center>
            <v-card color="pink" dark>
              <v-card-text 
              v-text="lorem">
              </v-card-text>
            </v-card>
        </v-layout>
    </v-container>
</template>
<script>
  export default {
    data: () => ({
      lorem: `welcome to admin page. Protected Endpoints`
    })
  }
</script>