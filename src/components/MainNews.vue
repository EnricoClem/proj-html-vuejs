<script>
import { store } from '../store.js';
import CardNews from '../components/CardNews.vue';

  export default {
    components: {
        CardNews
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
        <h4 class="side-title important-text">The News That We Have</h4>
        <h1 class="secondary-title">GOGRIN LATEST <span class="important-text">NEWS</span> FEED</h1>
    </div>
    <ul class="tranding-container flex gap-md">
        <CardNews v-for="news in store.allNews" :key="news.id" :item="news"/>
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