<script>
  export default {
    data() {
        return {
            allCombos: [
                {
                    title: 'Fresh garden tomato',
                    price: '37',
                    img: 'offer-img01.jpg'
                }, {
                    title: 'Some organic healty fruits',
                    price: '49',
                    img: 'offer-img02.jpg'
                }
            ]
        }
    }
  };
</script>

<template>

    <section class="container-sm">
        <ul class="flex">
            <li class="card-combo col-6 flex column between" v-for="combo in allCombos" :style="{ backgroundImage: `url(../public/${combo.img})` }">
                <div>
                    <div class="combo-title">{{ combo.title }}</div>
                    <div class="combo-title">combo offer...${{ combo.price }}</div>
                </div>
                <a href="#" class="paragraph">SHOP NOW</a>
            </li>
        </ul>
    </section>

</template>

<style lang="scss" scoped>
@use '/src/style/partials/variables.scss';

.container-sm {
    width: calc(745px + 20px);
    margin-bottom: 90px;
}

.card-combo {
    color: variables.$white;
    background-size: cover;
    height: 170px;
    margin: 10px;
    padding: 20px 25px;
}

.combo-title {
    font-weight: 600;
    font-size: 25px;
}

.paragraph {
    font-weight: 600;
    padding-top: auto;
}

</style>