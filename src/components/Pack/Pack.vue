<template>
  <v-container>
    <v-layout row wrap class="blanc mb-2" v-for="pack in packs" :key="pack.id">
      <v-flex xs12>
       <v-card></v-card>
        <v-container fluid>
          <v-layout row>
            <v-flex xs5 sm4 md3>
            <v-card-media :src="pack.imageUrl"
            height="130px">
            </v-card-media>
            </v-flex>
            <v-flex xs7 sm8 md9>
              <v-card-title primary-title>
              <div>
                <h2 class="black--text mb-0">{{ pack.title }}</h2>
                <div>{{ pack.date }}</div>
              </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat :to="'/pack/' + pack.id" class="fond">
                  <v-icon left>schedule</v-icon>
                  Voir le pack
                </v-btn>
              </v-card-actions>



            </v-flex>
          </v-layout>
        </v-container>
       </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      packs () {
        return this.$store.getters.loadedPacks

      }
    }
  }
</script>
