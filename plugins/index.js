export default defineNuxtPlugin(() => {
  return {
    provide: {
      calc: (a, b) => a + b,
    },
  };
});
