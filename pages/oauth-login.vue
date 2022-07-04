<script setup>
definePageMeta({
  title: 'oAuth redirect..',
});

const route = useRoute();

// console.log('route',route)
let {code,state} = route.query;

</script>

<template>
  <div class="loading-container">
      <div class="font-bold text-lg">token:{{code}}</div>
  </div>
</template>
