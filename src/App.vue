<template>
  <v-app class="fond">

<v-navigation-drawer

      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      temporary
      clipped

    >
      <v-list>
        <v-list-tile v-for="(item) in menuItems"
        :key="item.title"
        router
        :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
  <v-toolbar dark class="primary">


      <v-toolbar-title>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"
      class="hidden-sm-and-up"
      ></v-toolbar-side-icon>
       <router-link to='/' tag="span" style="cursor: pointer"> Vitanimous B12 </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
       <v-toolbar-items class="hidden-xs-only">
      <v-btn
      flat
      v-for="item in menuItems"
      :key="item.title"
      router
      :to="item.link"
      >
      <v-icon left>{{ item.icon }}</v-icon>
    {{ item.title }}
      </v-btn>

         </v-toolbar-items>






  </v-toolbar>
      <main>
      <animation name="router-anim" leave-active-class="animated fadeOut" >
      <router-view></router-view>
       </animation>
      </main>
  </v-app>
</template>

<script>


export default {
  data () {
    return {
      drawer: false,
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        {icon: 'face', title: 'Sign up', link: '/signup'},
        {icon: 'lock_open', title: 'Sign In', link: '/signin'}

      ]
      if (this.userIsAuthenticated) {
        menuItems = [
           {icon: 'ballot', title: 'B12 pack list', link: '/packslist'},
            {icon: 'dashboard', title: 'B12 pack creator', link: '/packcreator'},
            {icon: 'person', title: 'Profile', link: '/profile'},
        ]
      }
      return menuItems

    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }

  },
  name: 'App'
}
</script>
<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
