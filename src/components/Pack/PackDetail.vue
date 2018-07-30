<template>
  <v-container>
    <v-layout row wrap>
       <v-flex xs12>


         <v-card>
          <v-card-title>
            <h2 class="primary--text">{{ pack.title }}</h2>

          </v-card-title>
          <v-card-media :src="pack.imageUrl"
            height="130px">
            </v-card-media>
            <v-card-text>
            <div>{{ pack.date }}</div>
            <div>{{ pack.description }}</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="primary">S'inscrire</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>

         </v-card>
          <v-spacer></v-spacer>

       </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      pack () {
        return this.$store.getters.loadedPack(this.id)
      }
    }
  }
</script>
