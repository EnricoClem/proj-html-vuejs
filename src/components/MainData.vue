<script>
  export default {
    data() {
        return {
            companyData: [
                {
                    dataName: 'Years of Experienced',
                    quantity: '29+'
                }, {
                    dataName: 'Everiday Online Delivery',
                    quantity: '200+'
                }, {
                    dataName: 'Client Satyisfaction',
                    quantity: '20K'
                }, {
                    dataName: 'Award Winning',
                    quantity: '30+'
                }
            ]
        }
    }
  };
</script>

<template>

    <section class="container-md">
        <div class="container-sm">
            <ul class="flex between">
                <li class="flex centered gap-lg" v-for="(dataItem, index) in companyData">
                    <div class="flex centered column">
                        <h1 class="main-title">{{ dataItem.quantity }}</h1>
                        <h3 class="side-title">{{ dataItem.dataName }}</h3>
                    </div>
                    <img v-if="index !== companyData.length -1" class="divider" src="/public/counter-shap1.png" alt="">
                </li>
            </ul>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

.container-md {
    background-image: url(/public/shop-bg-img.jpg);
    padding: 50px 0;
}

.main-title {
    color: variables.$brand-yellow;
}

.side-title {
    color: variables.$white;
}

.divider {
    height: 100px;
    width: 8px;
}

</style>