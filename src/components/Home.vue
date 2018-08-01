<template>
  <v-container>
  <v-layout>
    <v-flex xs12 class="text-xs-center">

      <v-progress-circular
          :size="150"
          color="amber"
          indeterminate
          v-if="loading"
        ></v-progress-circular>
       </v-flex>
  </v-layout>
    <v-layout row wrap v-if="!loading">
      <v-carousel style="cursor: pointer" class="mb-2">
        <v-carousel-item v-for="pack in packs"
            @click.native="onLoadPack(pack.id)"
            :key="pack.id"
            :src="pack.imageUrl"
            >
          <v-jumbotron dark>
            <v-container fill-width>
              <v-layout align-center>
                <v-flex>
                  <h1 class="title" >{{ pack.title }}</h1>

                </v-flex>
              </v-layout>
            </v-container>
          </v-jumbotron>
        </v-carousel-item>
      </v-carousel>

      <v-flex xs12 sm6 class="text-xs-center text-sm-right">

      <v-btn large router to="/packslist" class="primary">Liste des packs</v-btn>
      </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-left">

      <v-btn large router to="/packcreator" class="primary">Créer un pack</v-btn>
      </v-flex>

    </v-layout>




  </v-container>
</template>

<script>
 export default {
    computed: {
      packs () {
        return this.$store.getters.loadedPacks
      },
      loading () {
        return this.$store.getters.loading
      }
    },
   methods: {
     onLoadPack(id) {
       this.$router.push('/pack/' + id);
     }
   }
 }

</script>

<style scoped>
.title {
  position: absolute;
  background-color: rgba(0,0,0,0.5);
  bottom: 0px;
  color: white;
  font-size: 30px;
  padding: 20px;
}
</style>
