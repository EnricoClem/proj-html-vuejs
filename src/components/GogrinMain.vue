<script>
  import MainHero from './MainHero.vue';
  import MainBrand from './MainBrand.vue';
  import MainProducts from '../components/MainProducts.vue';
  import MainQuote from './MainQuote.vue';
  import MainCombo from '../components/MainCombo.vue';

  export default {
    components: {
      MainHero,
      MainBrand,
      MainProducts,
      MainQuote,
      MainCombo
    }
  };
</script>

<template>

<MainHero />
<MainBrand />
<MainProducts />
<MainQuote />
<MainCombo />

</template>

<style lang="scss" scoped>

</style>