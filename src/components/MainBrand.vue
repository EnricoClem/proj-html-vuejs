<script>
  export default {

  };
</script>

<template>

<div class="container-sm">
    <div class="flex">
        <div class="flex">
            <div class="col-6">
                <h2 class="secondary-title">
                    <span class="important-text">Look what</span> consumer power has donewith <span class="important-text">organic food;</span> we can do the same with clothes.
                </h2>
            </div>
            <div class="col-6 flex column">
                <p class="paragraph gap-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero aspernatur tempora voluptates qui laborum repellat<span class="important-text"> eum odit nulla maiores dolor necessitatibus itaque, quis aliquam at.</span></p>
                <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, amet alias cupiditate pariatur porro sapiente praesentium dicta natus.</p>
            </div>
        </div>
    </div>
</div>

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

</style>