<script>
  export default {

  };
</script>

<template>

<footer>
  <div class="mail-box container-sm">
    <div class="flex centered between">
      <h3 class="mail-title">
        SUBSCRIBE OUR NEWSLETTER
      </h3>
      <div>
        <input type="email" class="mail-input" placeholder="your email">
        <button class="mail-button">SEND</button>
      </div>
    </div>    
  </div>
</footer>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

.mail-box {
  background-image: url(/public/counter-bg.jpg);
  padding: 35px 40px;
  color: variables.$white;
}

.mail-input {
  padding: 10px 20px;
  border: none;
  width: 220px;
}

.mail-title {
  font-size: 25px;
}

.mail-button {
  background-color: variables.$brand-green;
  border: none;
  color: currentColor;
  padding: 10px 40px;
}

</style>