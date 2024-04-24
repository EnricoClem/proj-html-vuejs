<script>  
export default {
    data() {
        return {
            allPartners: [
        {
            logo: 'brand1.png',
        }, {
            logo: 'brand2.png',
        }, {
            logo: 'brand3.png',
        }, {
            logo: 'brand4.png',
        }, {
            logo: 'brand1.png',
        }
    ]
        }
    }
};
</script>

<template>

<section class="container-sm">
    <div class="partners-container flex centered">
        <div v-for="partner in allPartners">
            <img :src="`/public/${ partner.logo }`" alt="">
        </div>
    </div>
</section>

</template>

<style lang="scss" scoped>

.partners-container {
    padding-bottom: 70px;
    gap: 50px;
}

</style>