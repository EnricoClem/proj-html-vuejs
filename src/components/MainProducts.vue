<script>
import { store } from '../store.js'
import CardProduct from './CardProduct.vue';

  export default {
    components: {
        CardProduct
    },
    data() {
        return {
            store: store,
        }
    },
  };

</script>

<template>

    <section class="container-md">
        <div class="container-sm flex centered column">
            <div class="flex centered column product-title">
                <h3 class="side-title important-text">Trending Online Store</h3>
                <h1 class="secondary-title">GOGRIN ALL <span class="important-text">ORGANIC</span> FOOD</h1>
                <div class="product-nav flex gap-lg">
                    <a href="#" class="paragraph">All Product</a>
                    <a href="#" class="paragraph">Apple</a>
                    <a href="#" class="paragraph">Food</a>
                    <a href="#" class="paragraph">Orange</a>
                    <a href="#" class="paragraph">Vegetables</a>
                </div>
            </div>
            <div>
                <ul class="card-container">
                    <CardProduct v-for="product in store.allProducts" :key="product.id" :item="product"/>
                </ul>
            </div>
            <div class="all-product-button">
                <button class="button-yellow">ALL PRODUCTS</button>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

.container-md {
    background-image: url(/public/shop-bg-img.jpg);
    background-size: cover;
    color: variables.$white;
    padding: 70px 0;
}

.product-nav .paragraph {
    margin-top: 30px;

    &:hover {
    color: variables.$brand-yellow;
}}

.card-container {
    display: flex;
    flex-wrap: wrap;
    width: calc(100% + 10px);
    margin: 20px 0 25px 0;
}

</style>