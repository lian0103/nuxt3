<script setup>
const { state } = defineProps({
  state: {},
});

const hintTextMap = {
  0: 'letter not in the answer',
  1: 'position is not correct',
  2: 'correct',
};

const hintMap = {
  0: 'bg-gray-600 text-white',
  1: 'bg-yellow-400 text-black',
  2: 'bg-green-700 text-white',
};
</script>

<template>
  <h2 class="py-4">Play Game</h2>
  <div class="my-4 p-6 bg-gray-400">
    <div class="flex md:justify-end items-center mb-4 flex-wrap">
      <div v-for="key in Object.keys(hintMap)" class="flex my-1 md:my-0">
        <div class="w-6 h-6" :class="hintMap[key]"></div>
        <span class="ml-2 mr-4 text-white">{{ hintTextMap[key] }}</span>
      </div>
    </div>
    <ul>
      <li v-for="[guess, hint] in state" class="flex gap-1 mb-2">
        <span
          v-for="(letter, i) in guess"
          v-if="hint"
          class="block w-6 h-6 text-center font-bold uppercase"
          :class="hintMap[hint[i]]"
        >
          {{ letter }}
        </span>
      </li>
    </ul>
  </div>
</template>
