<template>
    <v-container fuild>
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
      lorem: `List download file`
    })
  }
</script>