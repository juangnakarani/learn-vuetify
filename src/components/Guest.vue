<template>
    <v-container fuild>
         <v-layout justify-center align-content-center>
                <img src='../assets/guest.png' />
        </v-layout>
        <v-layout justify-center>            
            <v-card color="green" dark>
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
      lorem: `Welcome to guest page. This page is non-protected endpoint(s)`
    })
  }
</script>