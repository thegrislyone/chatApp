<template>
  <v-app app>
    <div class="block">
      <div class="sidebar">
        <div 
          v-for="(user, key) in users"
          :key="key"
        >
          <div>{{ user.name }}</div>
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
      return [
        {
          id: 0,
          name: "user 1",
          room: 1234
        },
        {
          id: 1,
          name: "user 2",
          room: 1234
        },
        {
          id: 2,
          name: "user 3",
          room: 1234
        }
      ]
    },
  },
  methods: {
    ...mapMutations(['clearData']),
    exit() {
      console.log('exit')
      this.$router.push('/?message=leftChat')
      this.clearData()
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
</style>
