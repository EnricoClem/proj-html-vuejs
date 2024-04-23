<script>
export default {
    data() {
        return {
            navBarItems: [
                {
                    'name': 'HOME',
                    'link': '#',
                    subMenu: [
                        {
                            'subName': 'HOME-1',
                            'subLink': '#',
                        }, {
                            'subName': 'HOME-2',
                            'subLink': '#',
                        }, {
                            'subName': 'HOME-3',
                            'subLink': '#',
                        }, {
                            'subName': 'HOME-4',
                            'subLink': '#',
                        }, 
                    ]
                }, {
                    'name': 'ABOUT',
                    'link': '#',
                    subMenu: [
                        {
                            'subName': 'ABOUT-1',
                            'subLink': '#',
                        }, {
                            'subName': 'ABOUT-2',
                            'subLink': '#',
                        }, 
                    ]
                }, {
                    'name': 'SERVICE',
                    'link': '#',
                    subMenu: []
                }, {
                    'name': 'PORTFOLIO',
                    'link': '#',
                    subMenu: [
                        {
                            'subName': 'PORTFOLIO-1',
                            'subLink': '#',
                        }, {
                            'subName': 'PORTFOLIO-2',
                            'subLink': '#',
                        }, {
                            'subName': 'PORTFOLIO-3',
                            'subLink': '#',
                        }, 
                    ]
                }, {
                    'name': 'SHOP',
                    'link': '#',
                    subMenu: [
                        {
                            'subName': 'SHOP-1',
                            'subLink': '#',
                        }, {
                            'subName': 'SHOP-2',
                            'subLink': '#',
                        }, {
                            'subName': 'SHOP-3',
                            'subLink': '#',
                        }, {
                            'subName': 'SHOP-4',
                            'subLink': '#',
                        }, {
                            'subName': 'SHOP-5',
                            'subLink': '#',
                        }, 
                    ]
                }, {
                    'name': 'BLOG',
                    'link': '#',
                    subMenu: [
                        {
                            'subName': 'BLOG-1',
                            'subLink': '#',
                        }, {
                            'subName': 'BLOG-2',
                            'subLink': '#',
                        }, {
                            'subName': 'BLOG-3',
                            'subLink': '#',
                        }, {
                            'subName': 'BLOG-4',
                            'subLink': '#',
                        }, 
                    ]
                }, {
                    'name': 'CONTACT',
                    'link': '#',
                    subMenu: []
                }, 
            ]
        }
    },
};
</script>

<template>

<!-- bottone principale -->
<li v-for="navItem in navBarItems" class="flex nav-button">
    <a :href="`${navItem.link}`">{{ navItem.name }}</a>

    <!-- bottone menù a tendina -->
    <div class="arrow-menu" v-if="navItem.subMenu.length !== 0">
        <font-awesome-icon :icon="['fas', 'angle-down']" />
        <ul class="sub-menu flex column gap-md">
            <li v-for="subNavItem in navItem.subMenu">
                <a :href="`${subNavItem.subLink}`">{{ subNavItem.subName }}</a>
            </li>
        </ul>
    </div>
    <span v-else></span>

</li>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

.nav-button {
    position: relative;

    &:hover .sub-menu {
        display: flex;
    }
}

a {
    font-weight: 500;
    font-size: small;

    &:hover {
        color: variables.$brand-yellow;
    }
}

.arrow-menu {
    color: variables.$gray;
    padding-left: 5px;
    font-size: 12px;
    margin-top: auto;
}

.sub-menu {
    display: none;
    color: black;
    background-color: variables.$white;
    position: absolute;
    left: 0;
    top: 42.5px;
    width: 150px;
    box-shadow: 0px 0px 20px -10px #888888;
    padding: 20px 0;
}

.sub-menu a {
    padding: 15px 20px;
}

</style>