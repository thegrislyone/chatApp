<template>
  <div class="error-page">
    <div class="error-page__message">
      <div class="error-page__icon-block">
        <img src="../assets/icons/404.gif" alt="">
      </div>
      <div class="error-page__text-block">
        <h1>There's no such page :(</h1>
        <h2><nuxt-link to="/">to main page {{ timer }}</nuxt-link></h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: 15
    }
  },
  created() {
    this.timerStart()
  },
  methods: {
    timerStart() {
      if (this.timer === -1) {
        this.$router.push('/')
      } else {
        setTimeout(() => {
          this.timer--
          this.timerStart()
        }, 1000)
      }
    },
  }
};
</script>

<style scoped>
  @font-face {
    font-family: 'Aldrich';
    src: url('../assets/fonts/aldrich/Aldrich-Regular.ttf');
  }
  .error-page {
    width: 100%;
    height: 100%;
    background: #343980;
    font-family: 'Aldrich';
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .error-page__icon-block img {
    width: 400px;
    border-radius: 10px;
  }
  .error-page__text-block {
    color: #ffffff;
    margin-top: 15px;
  }
  .error-page__text-block a {
    color: #ffffff;
    margin-top: 15px;
  }

</style>