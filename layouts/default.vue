<script setup>
import Header from '~~/components/NavHeader.vue';
const route = useRoute();

useHead({
  meta: [{ name: 'og:title', content: route.meta.title }],
  title: route.meta.title,
});
</script>

<template>
  <div class="defaultBg">
    <nav-header />
    <div class="inside-wrapper">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.defaultBg {
  @apply w-full h-screen;
  background: #fbfbf9;
  background-size: cover;
  background-repeat: no-repeat;
}
.inside-wrapper {
  max-width: 1480px;
  @apply p-4 mx-auto;
}
</style>
