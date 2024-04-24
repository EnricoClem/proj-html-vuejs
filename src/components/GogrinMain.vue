<script>
  import MainHero from './MainHero.vue';
  import MainBrand from './MainBrand.vue';
  import MainProducts from '../components/MainProducts.vue';
  import MainQuote from './MainQuote.vue';
  import MainCombo from '../components/MainCombo.vue';
  import MainData from './MainData.vue';
  import MainTrending from '../components/MainTrending.vue';
  import MainCTA from './MainCTA.vue';
  import MainNews from '../components/MainNews.vue';

  export default {
    components: {
      MainHero,
      MainBrand,
      MainProducts,
      MainQuote,
      MainCombo,
      MainData,
      MainTrending,
      MainCTA,
      MainNews
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
<MainCTA />
<MainNews />

</template>

<style lang="scss" scoped>

</style>