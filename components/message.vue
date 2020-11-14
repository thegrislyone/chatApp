<template>
    <div class="message">
        <div class='member-admin-wrap' v-if="name === 'admin'">
            <p class="member-admin-name">{{ text }}</p>
        </div>
        <div class='member-message' v-else>
            <div :class="[owner ? 'member-owner-message' : 'member-other-message']">
                <div class='member-message-name'>
                    <span>{{ name }}</span>
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
        owner: {
            type: Boolean,
            default: false
        }
    }
};
</script>


<style scoped>

    .message {
        text-align: center;
        margin: 1rem 0;
    }

    .member-admin-name {
        font-size: 1.1rem;
        font-weight: 300;
        display: inline-block;
        margin-top: 4rem;
        padding: .3rem 1rem;
        color: #ffffffc2;
        background-color: #333333;
        border-radius: 4px;
        box-shadow: 0px 0px 5px #060606a3;
    }

    .member-owner-message {
        background: #333333;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 3px; 
        width: 100%;
        max-width: max-content;
        padding: 7px 19px;
        padding-bottom: 5px;
        margin-left: auto;
        margin-right: 2rem;
        text-align: right;
    }

    .member-other-message {
        background: #828282;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        padding: 7px 19px;
        width: 100%;
        max-width: -webkit-max-content;
        max-width: -moz-max-content;
        max-width: max-content;
        margin-left: 2rem;
        margin-right: auto;
        padding-bottom: 5px;
        text-align: left;
    }

    .member-message-name {
        margin-bottom: 0;
        font-family: Roboto, 'sans-serif';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #DCDCDC; 
        margin-bottom: 1px;
    }

    .member-message-text-wrpa {
        font-family: Roboto, 'sans-serif';
        font-weight: 300;
        font-size: 16px;
        line-height: 21px;
        color: #FFFFFF;
    }
    
    .member-message-text {
        font-family: Roboto, 'sans-serif';
        padding: 4px;
        border: 1px solid #545454;
        border-radius: 3px;
        padding-bottom: 0;
        margin-bottom: 0px;
        padding-bottom: 0;
        color: #fff;
    }
    
</style>