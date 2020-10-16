<template>
  <div>
    <h1>Hello, {{ user.name }}</h1>
    <ul>
      <message 
        v-for="message in messages" :key="message.text"
        :name="message.name"
        :text="message.text"
        :owner="message.id === user.id"
      />
      <chatForm/>
    </ul>
  </div>
</template>

<script>
import message from '@/components/message.vue'
import chatForm from '@/components/chatForm.vue'

export default {
  components: {
    message,
    chatForm
  },
  head() {
    return {
      title: this.chatRoom
    }
  },
  layout: 'chat',
  middleware: ['chat'],
  computed: {
    user() {
      return this.$store.state.user
    },
    messages() {
      console.log(this.$store.state.messages, "messages")
      return this.$store.state.messages
    },
    chatRoom() {
      return 'Комната ' + this.user.room
    }
  },
  created() {
    console.log(this.messages)
  }
}
</script>>