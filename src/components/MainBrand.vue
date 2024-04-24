<script>
  export default {

  };
</script>

<template>

<section class="container-sm">
    <div class="flex column gap-md">

        <!-- Blocco con titolazione e paragrafi -->
        <div class="flex first-row">
            <div class="col-6">
                <h2 class="secondary-title">
                    <span class="important-text">Look what</span> consumer power has donewith <span class="important-text">organic food;</span> we can do the same with clothes.
                </h2>
            </div>
            <div class="col-6 flex column">
                <p class="paragraph gap-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero aspernatur tempora voluptates qui laborum repellat<span class="important-text"> eum odit nulla maiores dolor necessitatibus itaque, quis aliquam at.</span></p>
                <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, amet alias cupiditate pariatur porro sapiente praesentium dicta natus.</p>
            </div>
            <div class="badge-natural">
                <img src="/public/fe-shap1-1.png" alt="">
            </div>
        </div>

        <!-- Gallery di immagini con effetto hover -->
        <div class="flex gap-sm centered gallery">
            <div class="col-3">
                <img src="/fe3.jpg" alt="">
                <h3>Tasty juice</h3>
            </div>
            <div class="col-3">
                <img src="/fe1.jpg" alt="">
                <h3>Smoothies</h3>
            </div>
            <div class="col-3">
                <img src="/fe2.jpg" alt="">
                <h3>Fresh fruits</h3>
            </div>
            <div class="col-3">
                <img src="/fe1.jpg" alt="">
                <h3>Recepie ideas</h3>
            </div>
            <div class="direction-button left">
                <font-awesome-icon :icon="['fas', 'angle-left']" />
            </div>
            <div class="direction-button right">
                <font-awesome-icon :icon="['fas', 'angle-right']" />
            </div>
        </div>

    </div>
</section>

</template>

<style lang="scss" scoped>
@use '/src/style/partials/variables.scss';

.container-sm {
    margin: 80px auto;
}

.secondary-title {
    color: variables.$brand-green;
}

.paragraph {
    margin: 12px 0 10px 10px;
}

.first-row {
    position: relative;
}

.badge-natural {
    position: absolute;
    width: 120px;
    right: -150px;
    top: 10px;
}

.gallery {
    position: relative;

    &:hover .direction-button {
        display: flex;
    }
}

.col-3 {
    position: relative;

    &:hover h3 {
        display: block;
    }
}

.col-3 h3 {
    display: none;
    color: variables.$brand-yellow;
    position: absolute;
    left: 30px;
    bottom: 30px;
}

.direction-button {
    color: variables.$white;
    background-color: variables.$brand-yellow;
    display: none;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    position: absolute;
}

.left {
    left: -17.5px;
}

.right {
    right: -17.5px;
}

</style>