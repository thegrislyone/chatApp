<template>
  <div class="wrapper">

    <v-dialog
      v-model="error"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          {{ errorMessage }}
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="error = false"
          >
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <header class="header">
      <div class="header__subblock">
        <div class="header__button-bar">
          <div><span class="header__link">Главная</span></div>
          <div><span class="header__link">FAQ</span></div>
          <div><button class="header__button">Войти</button></div>
        </div>
      </div>
    </header>

    <div class="form-block">
      <div class="form-block__form">
        <div class="form-block__headline-block">
          <h1 class="form-block__main-headline">Анонимный чат</h1>
          <h2 class="form-block__second-headline">Найди себе собеседника</h2>
        </div>
        <div class="form-block__form-wrapper">
          <div class="form-block__input-wrapper">
            <input 
              type="text"
              :class="{
                'input_error': nameError
              }"
              v-model="name"
            >
            <div 
              v-if="nameError"
              class="error_message"
            >
              Заполните поле
            </div>
          </div>
          <div class="form-block__input-wrapper">
            <input 
              :type="(roomShow) ? 'text' : 'password'"
              :class="{
                'input_error': roomError
              }"
              v-model="room"
            >
            <div 
              class="room-input"
              @click="roomShow = !roomShow"
              :class="{
                'room-input_show': roomShow,
                'room-input_hide': !roomShow
              }"
            ></div>
            <div 
              v-if="roomError"
              class="error_message"
            >
              Заполните поле
            </div>
          </div>
          <div class="form-block__button-wrapper">
            <button 
              class="form-block__button"
              @click="submitForm"
            >
              Начать чат
            </button>
          </div>
        </div>
      </div>
      <div class="form-block__img">
        <img src="../assets/icons/form-bg.png" alt="">
      </div>
    </div>

    <div class="description">
      <div class="description__img">
        <img src="../assets/icons/description-bg.png" alt="">
      </div>
      <div class="description__block">
        <h1>Как это работает?</h1>
        <p>
          *Название чата* - это удобный мессенджер с помощью которого вы можете остаться абсолютно неизвестным своему собеседнику. Для того, чтобы начать чат, нужно написать имя и создать комнату для общения. Приглашайте друзей или  вступайте в друге чаты и общайтесь анонимно на интересные темы. 
        </p>
      </div>
    </div>

    <footer class="footer">

    </footer>

  </div>
</template>


<style>
  
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

      nameError: false,
      roomError: false,

      errorMessage: "",
      error: false,

      roomShow: true
    }
  },
  created() {
  },
  mounted() {
    const { message } = this.$route.query
    
    if (message === 'noUser') {
      this.errorMessage = "Введите данные"
    } else if (message === 'leftChat') {
      this.errorMessage = "Вы покинули чат"
    }
    this.error = !!message
  },
  methods: {
    ...mapMutations(['setUser']),
    submitForm() {
      this.nameError = false
      this.roomError = false

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
        if (!this.name) {
          this.nameError = true
        }
        if (!this.room) {
          this.roomError = true
        }
      } 
    }
  }
}
</script>
