<template>
  <div>
    <input type="text" name="" id="" v-model="text" @keydown.enter="sendMessage">
    <button @click="sendMessage">Отправить</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    }
  },
  methods: {
    sendMessage() {
      this.$socket.emit('createMessage', {
        text: this.text, 
        id: this.$store.state.user.id
      }, data => {
        if (typeof data === 'string') {
          alert("Ошибка" + data)
        }
        this.text = ''
      })
    }
  }
}
</script>