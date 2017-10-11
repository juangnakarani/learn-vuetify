<template>
  <v-app id="inspire" light>
    <v-navigation-drawer app clipped v-model="drawer" width="200" temporary dark>
      <v-list dense>
        <v-list-tile v-if="islogin" @click="goToLoginOut">
          <v-list-tile-action>
            <v-icon>lock_outline  </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-else @click="goToLoginOut">
          <v-list-tile-action>
            <v-icon>lock_open</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="guest">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Guest</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="settings">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="register">
          <v-list-tile-action>
            <v-icon>create</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Register</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="listpersons">
          <v-list-tile-action>
            <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>List Persons</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="upload">
          <v-list-tile-action>
            <v-icon>file_upload</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Upload</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="download">
          <v-list-tile-action>
            <v-icon>file_download</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Download</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Ayo rek ngeVuetify!</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outline color="teal" @click="register">Register now</v-btn>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid fill-height>
          <!-- <v-layout justify-center align-center> -->
          <router-view>
            <v-container fluid fill-height></v-container>
          </router-view>
          <!-- </v-layout> -->
        </v-container>
      </v-content>
    </main>
    <v-footer app fixed>
      <span>&copy; 2017 juang.nakarani</span>
    </v-footer>
  </v-app>
</template>

<script>
import store from './vuex/store.js'
import router from '@/router/index.js'
export default {
  data: () => ({
    drawer: false
  }),
  store,
  computed: {
    islogin: function() {
      return this.$store.getters.getIsLogin
    }
  },
  methods: {
    login: function() {
      router.push({ path: '/' })
    },
    guest: function() {
      router.push({ path: '/guest' })
    },
    settings: function() {
      router.push({ path: '/settings' })
    },
    register: function() {
      router.push({ path: '/register' })
    },
    listpersons: function() {
      router.push({ path: '/listpersons' })
    },
    upload: function() {
      router.push({ path: '/upload' })
    },
    download: function() {
      router.push({ path: '/download' })
    },
    goToLoginOut: function() {
      if (this.islogin == true) {
        this.$store.commit('changeToken', '')
        this.$store.commit('setIsAuth', false)
        this.$store.commit('setIsLogin', false)

      }
      router.push({ path: '/' })

    }
  },
  props: {
    source: String
  }
}
</script>