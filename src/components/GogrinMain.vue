<script>
  import MainHero from './MainHero.vue';
  import MainBrand from './MainBrand.vue';
  import MainProducts from '../components/MainProducts.vue';
  import MainQuote from './MainQuote.vue';
  import MainCombo from '../components/MainCombo.vue';
  import MainData from './MainData.vue';

  export default {
    components: {
      MainHero,
      MainBrand,
      MainProducts,
      MainQuote,
      MainCombo,
      MainData
    }
  };
</script>

<template>

<MainHero />
<MainBrand />
<MainProducts />
<MainQuote />
<MainCombo />
<MainData />

</template>

<style lang="scss" scoped>

</style>