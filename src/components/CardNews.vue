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

    <li class="product-card col-4 flex column gap-sm">
        <img :src="`/public/${ item.cover }`" alt="">
        <div class="news-data flex">
            <font-awesome-icon class="important-text" :icon="['fas', 'user']" />
            <p>{{ item.author }}</p>
            <font-awesome-icon class="important-text" :icon="['far', 'clock']" />
            <p>{{ item.date }}</p>
        </div>
        <h4 class="news-title">{{ item.title }}</h4>
        <p class="paragraph">
            {{ item.text }}
        </p>
        <a href="#" class="news-button">READ MORE...</a>
    </li>
    
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

.news-data {
    color: variables.$gray;
    font-size: 11px;
    gap: 6px;
}

.news-title {
    color: variables.$brand-green;
}

.news-button {
    color: variables.$brand-green
}

</style>