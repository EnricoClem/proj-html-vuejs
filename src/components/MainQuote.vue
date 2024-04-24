<script>
  export default {

  };
</script>

<template>

    <section class="container-sm">
        <div class="quote-box flex column centered gap-sm">
            <div class="quote-icon">
                <font-awesome-icon :icon="['fas', 'quote-left']" />
            </div>
            <p class="quote side-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nihil quaerat tempora molestias, a illum dolor, error expedita quibusdam ratione fugit ex est ut? Explicabo quod voluptate nemo nulla culpa, molestias perferendis eaque blanditiis accusamus minus, odio illum minima error.</p>
            <div class="flex centered column">
                <h4 class="side-title">Martha Alex</h4>
                <h5 class="important-text">Manager</h5>            
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

.quote-box {
    padding: 80px 75px 70px 75px;
}

.quote-icon {
    color: variables.$brand-green;
    font-size: 40px;
}

.quote.side-title {
    text-align: center;
    font-weight: 300;
    line-height: 30px;
}

</style>