<template>
    <v-container fuild>
        <v-layout justify-center>
            <v-card color="indigo" dark>
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
      lorem: `welcome to guest page. Please login to access admin page..`
    })
  }
</script>