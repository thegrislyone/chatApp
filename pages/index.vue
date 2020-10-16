<template>
  <div class="wrapper">
    <h1>
      HEADLINE
    </h1>

    <div v-if="error" class="error-message">
      <h2>Введите данные</h2>
    </div>

    <div class="form">
      <div class="form__block">
        <label for="nameField">Никнейм</label>
        <input 
          type="text" 
          name="" 
          id="nameField"
          placeholder="Введите никнейм"
          v-model="name"
        >
      </div>
      
       <div class="form__block">
       <label for="roomField">Комната</label>
        <input 
          type="number" 
          name="" 
          id="roomField"
          placeholder="Введите комнату"
          v-model="room"
        >
      </div>
      <button @click="submitForm">Подключиться</button>
    </div>
  </div>
</template>


<style>
  .error-message {
    color: red;
  }
  label {
    display: block;
  }
  .wrapper {
    padding: 15px;
  }
  .form__block {
    margin: 5px 0;
  }
  input {
    border: 1px solid black;
  }
</style>

<script>
import {mapMutations} from 'vuex'

export default {
  head: {
    title: "Здравствуйте"
  },
  sockets: {
    connect: function() {
      console.log("Socket connected");
    }
  },
  data() {
    return{ 
      name: "",
      room: "",
      error: false
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    submitForm() {
      if (this.name && this.room) {
        const user = {
          name: this.name,
          room: this.room
        }

        this.$socket.emit('userJoined', user, data => {
          if (typeof data === 'string') {
            alert(data)
          } else {
            user.id = data.userId
            this.setUser(user)
            this.$router.push('/chat')
          }
        })
      } else {
        this.error = true 
      } 
    }
  }
}
</script>
