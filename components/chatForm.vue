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
    .chat-form {
        width: 100%;
        bottom: 0;
        padding-right: 2.8rem;
    }

    .chat-form__input {
        background: #BDBDBD;
        box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        width: 81vw;
        height: 68px;
        max-width: 100%;
        padding-left: 30px;
        box-sizing: border-box;
    }

    .chat-form-wrap {
        position: fixed;
        bottom: 4%;
        right: 3%;
    }

    .btn-send {
        position: fixed;
        bottom:  4.7%;
        right: 4%;

    }

    .chat-form__input {
        font-size: 1.8rem;
        padding: 0.7rem;
    }

    .icon-send {
        width: 3rem;
    }

    .chat-form__input {
        border: none;
    }

</style>