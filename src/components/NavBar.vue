<script>
export default {
    data() {
        return {
            navBarItems: [
                {
                    'name': 'HOME',
                    subMenu: [
                        'HOME-1', 'HOME-2', 'HOME-3', 'HOME-4'
                    ]
                }, {
                    'name': 'ABOUT',
                    subMenu: [
                        'ABOUT-1', 'ABOUT-2'
                    ]
                }, {
                    'name': 'SERVICE',
                    subMenu: []
                }, {
                    'name': 'PORTFOLIO',
                    subMenu: [
                        'PORTFOLIO-1', 'PORTFOLIO-2', 'PORTFOLIO-3'
                    ]
                }, {
                    'name': 'SHOP',
                    subMenu: [
                        'SHOP-1', 'SHOP-2', 'SHOP-3', 'SHOP-4', 'SHOP-5'
                    ]
                }, {
                    'name': 'BLOG',
                    subMenu: [
                        'BLOG-1', 'BLOG-2', 'BLOG-3'
                    ]
                }, {
                    'name': 'CONTACT',
                    subMenu: []
                }, 
            ]
        }
    },
};
</script>

<template>

<li v-for="navItem in navBarItems" class="flex">
    <h3>{{ navItem.name }}</h3>
    <div class="arrow-menu" v-if="navItem.subMenu.length !== 0"><font-awesome-icon :icon="['fas', 'angle-down']" /></div>
</li>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

h3 {
    font-weight: 500;
    font-size: small;
}

.arrow-menu {
    color: variables.$gray;
    padding-left: 5px;
    font-size: 12px;
    margin-top: auto;
}

</style>