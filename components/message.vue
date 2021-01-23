<template>
    <div class="message">
        <div class='member-admin-wrap' v-if="name === 'admin'">
            <p class="member-admin-name">{{ text }}</p>
        </div>
        <div class='member-message' v-else>
            <div :class="[owner ? 'member-owner-message' : 'member-other-message']">
                <div class='member-message-name'>
                    <span>{{ name }}</span>
                    <span class="time">{{ time }}</span>
                </div>
            
                <div class="member-message-text-wrap">
                    <p class="member-message-text">{{ text }}</p>    
                </div>    
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        text: String,
        time: String,
        owner: {
            type: Boolean,
            default: false
        }
    }
};
</script>


<style scoped>
    
</style>
