<script>
  export default {

  };
</script>

<template>
    <header>
        <div class="container-lg">
        <div class="head-info flex between">
            <div class="flex paragraph gap-sm">
                <div>
                    <font-awesome-icon :icon="['fas', 'location-dot']" /> North bauthula, tala, USA
                </div>
                <div>
                    <font-awesome-icon :icon="['fas', 'envelope']" /> demo@example.com
                </div>
            </div>
            <div class="flex paragraph gap-md">
                <div>
                    <font-awesome-icon :icon="['fas', 'clock']" /> 8:30AM-8:30PM
                </div>
                <ul class="flex gap-sm">
                    <li><font-awesome-icon :icon="['fab', 'facebook-f']" /></li>
                    <li><font-awesome-icon :icon="['fab', 'twitter']" /></li>
                    <li><font-awesome-icon :icon="['fab', 'instagram']" /></li>
                    <li><font-awesome-icon :icon="['fab', 'pinterest']" /></li>
                </ul>
            </div>
        </div>
    </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

.head-info {
    background-color: variables.$brand-green;
    color: white;
    padding: 10px 100px;
}

</style>