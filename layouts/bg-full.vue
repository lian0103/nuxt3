<script>
export default {
  name: 'bg-full',
};
</script>

<script setup>
const route = useRoute();

useHead({
  meta: [{ name: 'og:title', content: route.meta.title }],
  title:route.meta.title
});
</script>

<template>
  <div class="w-full flex justify-center h-screen items-center loginBg">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.loginBg {
  background: url('~~/assets/images/gtBg.svg'), #fbfbf9;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
