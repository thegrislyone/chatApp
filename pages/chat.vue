<template>
    <div class="">

        <!-- <h1>Hello, {{ user.name }}</h1> -->
        <chatHeader />
        <article class='list-message'>
            <message
                v-for="message in messages"
                :key="message.text"
                :name="message.name"
                :text="message.text"
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
    .list-message {
        /* position: relative; */
    }
</style>