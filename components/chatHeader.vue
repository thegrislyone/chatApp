<template>
    <div>
        <header class="chat-header">
            <div class="chat-header-wrap">
                <h3 class="chat-header__title room-name" id="room-name">
                    Room name
                </h3>
            </div>
        </header>
    </div>

</template>

<script>
    export default {
        props: {

        }
    };
</script>

<style>

    .chat-header {
        background-color: red;
        background: #343980;
        box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.25);
        position: fixed;
        top: 0;
        width: 100%;
    }


    .chat-header__title {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 26px;
        color: #EBEBEB;    
    }

    .chat-header-wrap {
        padding: 1.3rem 2rem;
        padding: 0 15px;
    }


</style>
