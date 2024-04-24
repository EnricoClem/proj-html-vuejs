<script>
  import MainHero from './MainHero.vue';
  import MainBrand from './MainBrand.vue';
  import MainProducts from '../components/MainProducts.vue';
  import MainQuote from './MainQuote.vue';
  import MainCombo from '../components/MainCombo.vue';
  import MainData from './MainData.vue';
  import MainTrending from '../components/MainTrending.vue';

  export default {
    components: {
      MainHero,
      MainBrand,
      MainProducts,
      MainQuote,
      MainCombo,
      MainData,
      MainTrending
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
<MainTrending />

</template>

<style lang="scss" scoped>

</style>