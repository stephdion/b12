<template>
  <v-layout row wrap>


    <v-flex xs12 sm6 md4>
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
 <div class="text-xs-center">
    <v-btn
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click.native="loader = 'loading'"
    >
      Accept Terms
    </v-btn>

    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey"
      class="white--text"
      @click.native="loader = 'loading3'"
    >
      Upload
      <v-icon right dark>cloud_upload</v-icon>
    </v-btn>

    <v-btn
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click.native="loader = 'loading2'"
    >
      Custom Loader
      <span slot="loader">Loading...</span>
    </v-btn>

    <v-btn
      :loading="loading4"
      :disabled="loading4"
      color="info"
      @click.native="loader = 'loading4'"
    >
      Icon Loader
      <span slot="loader" class="custom-loader">
        <v-icon light>cached</v-icon>
      </span>
    </v-btn>
  </div>
    <v-spacer></v-spacer>
  </v-layout>
</template>
<script>
  export default {
    data: () => ({
      date: null,
      modal: false

    })
  }
</script>
