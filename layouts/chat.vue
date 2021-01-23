<template>
    <v-app app>
        <div class="block">
            <article class="sidebar">
                <div class="member-count">
                    <span class='member-count-text'>В комнате &mdash; {{ users.length }} </span>
                </div>
                <div class='' v-for="u in users" :key="u.id">
                    <div 
                        class='member-wrap member'
                        :class="{ 
                            'active': u.id === user.id,
                            'not_active': u.id !== user.id
                        }"
                    >
                        
                        <div class='member-img-wrap'>
                            <img class="member-img" src="@/static/member-icon.svg" alt="user-img">
                        </div>

                        <div class='member-name'>
                            <span>{{ u.name }}</span>
                        </div>
                    
                    </div>
                </div>
            </article>
            <div class="chat">
            
                <nuxt />
            
            </div>
        </div>
    </v-app>
</template>

<script>

import { mapMutations } from "vuex";

export default {
    computed: {
        users() {
            return this.$store.state.users;
        },
        user() {
            return this.$store.state.user;
        }
    },
    methods: {
        ...mapMutations(["clearData"]),
        exit() {
            this.$socket.emit("userLeft", this.user.id, () => {
                this.$router.push("/?message=leftChat");
                this.clearData();
            });
        }
    }
};
</script>

<style scoped>


</style>
