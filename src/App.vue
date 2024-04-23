<script>
import GogrinHeader from './components/GogrinHeader.vue';
import GogrinMain from './components/GogrinMain.vue';
import GogrinFooter from './components/GogrinFooter.vue';

  export default {
    components: {
      GogrinHeader,
      GogrinMain,
      GogrinFooter
    }
  };
</script>

<template>

  <GogrinHeader />

  <GogrinMain />

  <GogrinFooter />

</template>

<style lang="scss">

@use './style/general.scss';

</style>