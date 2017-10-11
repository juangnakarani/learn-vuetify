<template>
  <v-container fuild>
    <v-layout justify-center>
      <v-card color="red" dark>
        <v-card-text class="display-4" v-text="errtext + ' gaes :)'">
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>

import router from '@/router/index.js'

export default {
  data() {
    return {
      errtext: this.errnum
    }
  },
  props: ['errnum']
}
</script>