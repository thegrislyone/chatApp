<template>
    <v-app app>
        <div class="block">
            <article class="sidebar">
                <div class="member-count">
                    <span class='member-count-text'>В комнате &mdash; n <!-- {{ users.count }} --></span>
                </div>
                <div class='' v-for="u in users" :key="u.id">
                    <div class='member-wrap member' :class="{ active: u.id === user.id}">
                        
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


.block {
    display: flex;
    align-items: flex-start;
    height: 100vh;
}

.block > * {
    height: 100vh;
}

.sidebar {
    padding: 15px 24px;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-width: 30rem;
    background-color: #181121;
    box-shadow: inset 0px 3px 8px 2px rgba(0, 0, 0, 0.3);
}


.member-wrap {
    display: flex;
    width: 100%;
    height: 40px;
    max-width: 28rem;
    background-color: #333333;
    border-radius: 3px;
    margin-bottom: 1rem;
    border: 2px solid #2F80ED;
    padding-bottom: 3rem;
}

.active {
    border: 2px solid #219653;
}


.member-img-wrap {
    margin: 8px;
}

.member-name {
    margin-top: 12px;
    font-family: Roboto, 'sans-serif';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
}

.member-count-text {
    font-family: Roboto, 'sans-serif';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #DCDCDC;
}

.member-count {
    margin-bottom: 14px;
}


.chat {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #1C1328;
    overflow-x: auto;
}

</style>
