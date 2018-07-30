<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <c-card-text>
          <v-container class="white elevation-7">
          <v-layout align-center justify-center row fill-height row>
          <v-icon class="primary--text" style="font-size: 65px;">face</v-icon>
          <h1 class="primary--text">Inscription</h1>
          </v-layout>
            <form @submit.prevent="onSignup">
              <v-layout row>
                <v-flex xs12>

                  <v-text-field
                  name="email"
                  label="email"
                  id="email"
                  v-model="email"
                  type="email"
                  required
                  prepend-icon="email"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                  name="password"
                  label="password"
                  id="password"
                  v-model="password"
                  type="password"
                  required
                  prepend-icon="lock"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                  name="confirmPassword"
                  label="Confirm Password"
                  id="confirmPassword"
                  v-model="confirmPassword"
                  type="password"
                  prepend-icon="lock"
                  :rules="[comparePasswords]"

                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row >

                   <v-spacer></v-spacer>


                   <v-btn type="submit" class="primary" :loading="loading">S'inscrire</v-btn>

                  <v-spacer></v-spacer>
              </v-layout>
            </form>
          </v-container>
        </c-card-text>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: '',
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Passwords do not match' : true
      },
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
     },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }

    },
    methods: {
      onSignup () {
        //Vuex

        this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
      },
      onDismissed () {
        console.log('Dismissed Alert')
        this.$store.dispatch('clearError')
      }
    }
  }
</script>
