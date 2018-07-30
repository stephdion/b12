<template>
  <v-container class="white">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="primary--text">New booster pack</h2>
      </v-flex>
    </v-layout>
     <v-layout>
      <v-flex row>
       <form @submit.prevent="onCreatePack" >

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
              name="title"
              label="Title"
              id="title"
              v-model="title"
              required
              ></v-text-field>
            </v-flex>
      </v-layout>
      <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
              name="imageUrl"
              label="Image"
              id="imageUrl"
              v-model="imageUrl"
              required
              ></v-text-field>
            </v-flex>
      </v-layout>
       <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img width="100%" :src="imageUrl">
            </v-flex>
      </v-layout>
      <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
              name="description"
              label="Description"
              id="description"
              v-model="description"
              required
              multi-line
              ></v-text-field>
            </v-flex>
      </v-layout>
         <v-layout row wrap>


    <v-flex xs12 sm6 offset-sm3>
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        lazy
        full-width
        width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date"
          label="Date de création du pack"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-flex>

    <v-spacer></v-spacer>
  </v-layout>
    <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit"

              >Créer un pack</v-btn>
            </v-flex>
      </v-layout>
       </form>
      </v-flex>
    </v-layout>


  </v-container>
</template>

<script>
  export default {

  data () {
    return {
      title: '',
      description: '',
      imageUrl: '',
      date: null,
      dateFormatted: null,
      modal: false
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' &&
        this.imageUrl !== '' &&
        this.description !== ''
    },
     computedDateFormatted () {
        return this.formatDate(this.date)
      }
  },
  methods: {
    onCreatePack () {

      if(!this.formIsValid){
        return
      }
      const packData = {
        title: this.title,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.date
      }
      this.$store.dispatch('createPack', packData)
      this.$router.push('packslist')
    },
    formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }


  },

  watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      }
    },
  }
</script>
