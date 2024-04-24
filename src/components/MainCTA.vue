<script>
  export default {

  };
</script>

<template>

<section class="container-md">
    <div class="container-sm">
        <div class="cta-card flex centered column gap-md">
            <h4 class="side-title">HERE YOU CAN GET 100% FRESH ORGANIC FOOD</h4>
            <h2 class="secondary-title">Best organic foodup to 25% off for all product</h2>
            <p class="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, provident deleniti? Aperiam quos laborum sed debitis reiciendis officia aliquid sint facilis, voluptate rerum doloribus tempora quas alias nulla, at laboriosam!</p>
            <div class="flex gap-sm">
                <button class="button-yellow squared"><font-awesome-icon :icon="['fab', 'whatsapp']" /> +03 2910 34531</button>
                <button class="button-green squared">APPOINTMENT</button>
            </div>
        </div>
    </div>
</section>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

.container-md {
    background-image: url(/public/call-to-bg.jpg);
}

.cta-card {
    color: variables.$white;
    padding: 70px;
}

.paragraph {
    text-align: center;
    line-height: 20px;
}

.squared {
    border-radius: 3px;
    width: auto;
    padding: 15px 20px;
}

</style>