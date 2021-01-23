<template>
    <div class="">

        
        <chatHeader :chatRoom="chatRoom" />
        <article class='list-message'>
            <message
                v-for="message in messages"
                :key="message.text"
                :name="message.name"
                :text="message.text"
                :time="message.time"
                :owner="message.id === user.id"
            />
            
        </article>
        <chatForm />
    </div>
</template>

<script>
import message from "@/components/message.vue";
import chatForm from "@/components/chatForm.vue";
import chatHeader from "@/components/chatHeader.vue";

export default {
    components: {
        message,
        chatForm,
        chatHeader,
    },
    head() {
        return {
            title: this.chatRoom
        };
    },
    layout: "chat",
    middleware: ["chat"],
    computed: {
        user() {
            return this.$store.state.user;
        },
        messages() {
            console.log(this.$store.state.messages)
            return this.$store.state.messages;
        },
        chatRoom() {
            return "Комната " + this.user.room;
        }
    },
    created() {}
};
</script>


<style scoped>
    
</style>