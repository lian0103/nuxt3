<script setup>
definePageMeta({
  layout: 'custom',
});
const isAnsShow = ref(false);
const guessWord = ref('');
const { state, submitGuess, resetGuess } = useGameState();
const handleGuess = () => {
  submitGuess(guessWord.value);
};
const handleReset = () => {
  isAnsShow.value = false;
  resetGuess();
};
const handleSubmit = () => {
  submitGuess(guessWord.value);
  guessWord.value = '';
};
</script>

<template>
  <NuxtLayout name="custom">
    <div class="container-wrapper relative">
      <div class="w-4/5 mx-auto relative">
        <div class="absolute right-0 top-2">
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-fit mr-4"
            @click="isAnsShow = !isAnsShow"
          >
            SHOW ANS
          </button>
          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-fit"
            @click="handleReset"
          >
            RESET
          </button>
        </div>
      </div>

      <div class="w-4/5 mx-auto">
        <Game :state="state" />
        <div class="w-fit" v-show="isAnsShow">
          ans: {{ state[0] ? state[0][2] : '' }}
        </div>

        <form action="" @submit.prevent="handleSubmit">
          <input
            type="text"
            class="my-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="guessWord"
            maxlength="5"
          />
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            :disabled="guessWord.length !== 5"
            type="submit"
          >
            GUESS
          </button>
        </form>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss">
.container-wrapper {
  @apply w-full bg-gray-300 flex flex-col;
  height: calc(100vh - 64px);
}
</style>
