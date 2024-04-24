<script>
  import MainHero from './MainHero.vue';
  import MainBrand from './MainBrand.vue';
  import MainProducts from '../components/MainProducts.vue';

  export default {
    components: {
      MainHero,
      MainBrand,
      MainProducts
    }
  };
</script>

<template>

<MainHero />
<MainBrand />
<MainProducts />

</template>

<style lang="scss" scoped>

</style>