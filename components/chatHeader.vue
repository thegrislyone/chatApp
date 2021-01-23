<template>
    <div>
        <header class="chat-header">
            <div class="chat-header-wrap">
                <h3 class="chat-header__title room-name" id="room-name">
                    {{ chatRoom }}
                </h3>
            </div>
        </header>
    </div>

</template>

<script>
    export default {
        props: {
            chatRoom: String
        }
    };
</script>

<style>

    


</style>
