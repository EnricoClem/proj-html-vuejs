<script>
  export default {

  };
</script>

<template>

    <section class="container-lg flex">
        <div class="container-sm flex column centered">
            <h4 class="side-title">GOGRIN ORGANIC FOOD STORE</h4>
            <h1 class="main-title">Eating naturally & rganic is always be healthy.</h1>
            <div>
                <button class="button-yellow">ABOUT US</button>
                <button class="button-green">OUR STORY</button>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

.container-lg {
    background-image: url(../public/H3-slider3.jpg);
    background-size: cover;
    height: 600px;
    color: variables.$white;
}

.main-title {
    text-align: center;
}

.button-yellow, .button-green {
    margin: 30px 5px;
}

</style>