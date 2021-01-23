<template>
    <div class="con">
        <section class='chat-form'>
            <div class="chat-form-wrap">
                <input class='chat-form__input' type="text" name="chat-input" id="" v-model="text" @keydown.enter="sendMessage"
                    placeholder='Написать...'>
                <div class="btn-send">
                    <button @click="sendMessage" >
                        <img class="icon-send" src="@/static/icon-send-message.svg" alt="">
                    </button>
                </div>
            </div>
        </section>
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
            }, 
            data => {
                if (typeof data === 'string') {
                    alert("Ошибка" + data)
                }
                this.text = ''
            })
        }
    }
}

</script>

<style scoped>
    

</style>