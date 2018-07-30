
import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

/* eslint-disable no-alert, no-console */

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
      loadedPacks: [
        {
          imageUrl: 'https://www.sstenligne.com/media/formations/fd97723b45073b0c1b28f68819aaedc9/images/thumb.jpg',
          id: '1',
          title: 'Gestion des risques en espace clos',
          date: '2018-07-01'
        },
        {
          imageUrl: 'https://syntec-numerique.fr/sites/default/files/styles/large/public/Image/cybersecu/cybersecurite-syntec-23-01-2017.jpg?itok=8WmhowvT',
          id: '2',
          title: 'Gestion de la Cybersécurité',
          date: '2018-07-20'
        },
        {
          imageUrl: 'https://syntec-numerique.fr/sites/default/files/styles/large/public/Image/cybersecu/cybersecurite-syntec-23-01-2017.jpg?itok=8WmhowvT',
          id: '23',
          title: 'Gestion de JP',
          date: '2018-07-20'
        },
        {
          imageUrl: 'https://www.lebigdata.fr/wp-content/uploads/2017/01/big-data-cybersecurite-660x330.jpg',
          id: '3',
          title: 'Gestion de la Cybersécurité #3',
          date: '2018-07-20'
        }

      ],
      user: null,
      loading: false,
      error: null
  },
  mutations: {
    createPack (state, payload) {
      state.loadedPacks.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredPacks: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInAndRetrieveDataWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredPacks: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    createPack ({commit}, payload) {
      const pack = {
        title: payload.title,
        description: payload.description,
        imageUrl: payload.imageUrl,
        date: payload.date,
        id: "asfdasfsaf"
      }
      commit('createPack', pack)
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    loadedPacks (state) {
      return state.loadedPacks.sort((packA, packB) => {
        return packB.date > packA.date
      })
    },
    featuredPacks (state, getters) {

      return getters.loadedPacks.slice(0, 5)
    },
    loadedPack (state) {
      return (packId) => {
        return state.loadedPacks.find((pack) => {
          return pack.id === packId
        })
      }
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }

})
