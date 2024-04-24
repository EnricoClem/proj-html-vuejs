<script>
import { store } from '../store.js';
import CardTrending from '../components/CardTrending.vue'

  export default {
    components: {
        CardTrending
    },
    data() {
        return {
            store: store,
        }
    },
  };  
</script>

<template>

<section class="container-sm">
    <div class="trending-title flex centered column">
        <h4 class="side-title important-text">Running Week Top Selling</h4>
        <h1 class="secondary-title">TOP <span class="important-text">TRENDING</span> ORGANIC FOOD</h1>
    </div>
    <ul class="tranding-container flex gap-md">
        <CardTrending v-for="trendProduct in store.allProducts" :key="trendProduct.id" :item="trendProduct"/>
    </ul>
</section>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

.trending-title {
    color: variables.$brand-green;
    background-image: url(/public/title-shap.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    padding-top: 30px;
    margin: 60px 0 40px 0;
}

.tranding-container {
    margin-bottom: 80px;
}

</style>