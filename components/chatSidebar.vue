<template>
    <article class="sidebar">
        <div class="sidebar-wrapper">
            <!-- v-for="user in usersList" :key="user.id" -->
            <div class="sidebar-title" id="title-user-list" >
                <h4 class="sidebar-title__text">В комнате &#8212;</h4>

                <!-- <span class="count-users">{{ user.count }}</span> -->
            
            </div>

            <!-- <div :class="{ active: u.id === user.id}">
                {{ u.name }}
            </div> -->
            <ul class="sidebar__user-list"></ul>
        </div>
    </article>
</template>

<script>
export default {
    name: "sidebar",
    props: {
        // usersList: {
        //     type: Array
        // },
        // countUsers: {
        //     type: Number,
        //     default() {
        //         return 0;
        //     },
        // }
    }
};
</script>

<style scoped>
.sidebar {
    background-color: #181121;
    box-shadow: inset 0px 3px 8px 2px rgba(0, 0, 0, 0.3);
}
</style>
