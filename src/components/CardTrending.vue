<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
  }
}
</script>

<template>

<li v-if="item.trending !== ''" class="product-card col-3 flex column centered gap-sm">
    <img :src="`/public/${ item.img }`" alt="">
    <h4 class="side-title">{{ item.name }}</h4>
    <p v-if="item.sale === ''" class="price">{{ item.price }}</p>
    <div v-else class="sale flex">
        <p class="price old-price">{{ item.price }}</p><p class="price">{{ item.sale }}</p>
        <div class="sale-badge">SALE!</div>
    </div>
    <div class="prod-buttons flex">
        <button class="product-button" title="wishlist">
            <font-awesome-icon :icon="['fas', 'heart']" />
        </button>
        <button class="product-button" title="add to cart">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        </button>
        <button class="product-button" title="see more">
            <font-awesome-icon :icon="['fas', 'eye']" />
        </button>
    </div>
</li>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

.product-card {
    padding-bottom: 15px;
    position: relative;
    background-color: variables.$white;
    box-shadow: 0px 0px 20px -10px #888888;

    &:hover .prod-buttons {
        display: flex;
    }
}

.old-price {
    text-decoration: line-through;
    opacity: 0.5;
}

.price {
    color: variables.$gray;
    font-weight: 500;
    font-size: small;
}

.sale {
    gap: 5px;
}

.sale-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: variables.$brand-yellow;
    padding: 4px 8px;
    border-radius: 3px;
    font-size: 12px;
}

.prod-buttons {
    gap: 5px;
    position: absolute;
    top: 125px;
    display: none;
}

.product-button {
    border: none;
    padding: 10px;
    border-radius: 50%;
    background-color: variables.$white;
    color: black;

    &:hover {
        background-color: variables.$brand-yellow;
        color: variables.$white;
    }
}

</style>