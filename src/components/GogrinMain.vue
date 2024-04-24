<script>
  import MainHero from './MainHero.vue';
  import MainBrand from './MainBrand.vue';
  import MainProducts from '../components/MainProducts.vue';
  import MainQuote from './MainQuote.vue';

  export default {
    components: {
      MainHero,
      MainBrand,
      MainProducts,
      MainQuote
    }
  };
</script>

<template>

<MainHero />
<MainBrand />
<MainProducts />
<MainQuote />

</template>

<style lang="scss" scoped>

</style>