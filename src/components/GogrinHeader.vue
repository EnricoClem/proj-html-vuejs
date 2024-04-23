<script>
    import NavBar from './NavBar.vue';

    export default {
        components: {
            NavBar
        },
    };
</script>

<template>
    <header>
        
        <!-- Primo blocco HEADER con info di contatto -->
        <div class="container-lg head-info">
            <div class="container-md flex between">
                <div class="flex paragraph gap-sm">
                    <div>
                        <font-awesome-icon :icon="['fas', 'location-dot']" /> North bauthula, tala, USA
                    </div>
                    <div>
                        <font-awesome-icon :icon="['fas', 'envelope']" /> demo@example.com
                    </div>
                </div>
                <div class="flex paragraph gap-md">
                    <div>
                        <font-awesome-icon :icon="['far', 'clock']" /> 8:30AM-8:30PM
                    </div>
                    <ul class="flex gap-sm">
                        <li><font-awesome-icon :icon="['fab', 'facebook-f']" /></li>
                        <li><font-awesome-icon :icon="['fab', 'twitter']" /></li>
                        <li><font-awesome-icon :icon="['fab', 'instagram']" /></li>
                        <li><font-awesome-icon :icon="['fab', 'pinterest']" /></li>
                    </ul>
                </div>
            </div>
        </div>

    <!-- Secondo blocco HEADER con menu dinamico -->
        <div class="container-lg head-nav">
            <div class="container-md flex">
                <img src="/public/logo.png" alt="" class="head-logo">
                <ul class="grow flex centered gap-md">
                    <NavBar />
                </ul>
                <div class="flex">
                    <div class="search-button"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></div>
                    <div class="cart-button">
                        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                        <div class="cart-quantity">0</div>
                    </div>
                    <button class="button-small">ORDER NOW</button>
                </div>
            </div>
        </div>

    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

.head-info {
    background-color: variables.$brand-green;
    color: white;
    padding: 10px;
}

.head-nav {
    background-color: variables.$white;
    padding: 15px;
}

.head-logo {
    width: 130px;
}

.search-button {
    background-color: variables.$brand-yellow;
    color: variables.$white;
    padding: 10px 12px;
    border-radius: 50%;
    aspect-ratio: 1/1;
}

.cart-button {
    color: variables.$brand-green;
    padding: 10px 12px;
    position: relative;
}

.cart-quantity {
    background-color: variables.$brand-yellow;
    color: variables.$white;
    font-size: 10px;
    padding: 1px 5px;
    border-radius: 50%;
    aspect-ratio: 1/1;
    position: absolute;
    right: 1px;
    top: 3px;
}

.button-small {
    background-color: variables.$brand-yellow;
    border: none;
    border-radius: 0 15px 0 15px;
    color: variables.$white;
    font-size: small;
    padding: 10px 15px;
    margin-left: 10px;
}

ul {
    margin: 0 70px;
}

</style>