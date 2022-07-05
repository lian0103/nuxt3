<script setup>
import { onMounted } from 'vue';
definePageMeta({
  title: 'oAuth redirect..',
});

const route = useRoute();
const { fetchUserinfoFromLine } = useUserInfo();
const { code, state } = route.query;
const info = reactive({});

onMounted(async () => {
  const { name, email, picture } = localStorage.getItem('ec-userInfo')
    ? JSON.parse(localStorage.getItem('ec-userInfo'))
    : {};

  if (name && email) {
    info.name = name;
    info.email = email;
    info.picture = picture;
  }

  if (!info.name) {
    const res = await fetchUserinfoFromLine({ code });
    const { name, email, picture } = res.data || {};

    info.name = name;
    info.email = email;
    info.picture = picture;

    localStorage.setItem('ec-userInfo', JSON.stringify(info));
  }
});
</script>

<template>
  <div class="loading-container">
    <div class="flex">
      <img
        v-if="info.picture"
        class="w-10 h-10 rounded-full"
        :src="info.picture"
        alt="Rounded avatar"
      />
      <div>
        <div class="font-bold text-lg">name:{{ info.name }}</div>
        <div class="font-bold text-lg">email:{{ info.email }}</div>
      </div>
    </div>
  </div>
</template>
