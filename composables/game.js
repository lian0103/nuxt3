const decode = (state = '[]') => JSON.parse(state);
const encode = (state) => JSON.stringify(state);

export const useGameState = () => {
  const state = useCookie('state', {
    encode,
    decode,
    default: () => [],
  });

  async function submitGuess(guessWord) {
    state.value = await $fetch(`/api/guess/${guessWord}`, {
      method: 'GET',
    });
  }

  async function resetGuess() {
    state.value = [];
    await $fetch('/api/guess/initReset', {
      method: 'DELETE',
    });
  }

  return { state, submitGuess, resetGuess };
};
