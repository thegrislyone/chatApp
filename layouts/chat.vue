<template>
  <v-app app>
    <div class="block">
      <div class="sidebar">
        <div 
          v-for="u in users"
          :key="u.id"
        >
          <div :class="{
            'active': u.id === user.id
          }">{{ u.name }}</div>
        </div>
      </div>
      <div class="content">
        <nuxt/>
        <button @click="exit">Выйти</button>
      </div>
    </div>
  </v-app>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  computed: {
    users() {
      return this.$store.state.users
    },
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    ...mapMutations(['clearData']),
    exit() {
      this.$socket.emit('userLeft', this.user.id, () => {
        this.$router.push('/?message=leftChat')
        this.clearData()
      })
    }
  }
};
</script>

<style>
  .block {
    display: flex;
    align-items: flex-start;
    height: 100vh;
  }
  .block > * {
    height: 100vh;
  }
  .sidebar {
    border-right: 1px solid black;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
  }
  .active {
    color: red;
  }
</style>
