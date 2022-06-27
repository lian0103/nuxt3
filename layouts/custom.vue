<script>
export default {
  name: 'custom',
};
</script>

<template>
  <div class="layout-main">
    <div class="head">
      <div class="flex justify-between">
         <NuxtLink to="/" class="mr-4">wordle</NuxtLink>
         <span class="text-sm p-2">2022/06/24 Jason</span>
      </div>
     
      <slot name="header" />
    </div>
    <slot />
  </div>
</template>

<style lang="scss">
.layout-main {
  @apply w-full flex flex-col;
  .head {
    @apply w-full bg-orange-300 shadow-lg h-16 p-4;
    @apply  font-bold text-2xl text-white tracking-wider;
  }
}
</style>
