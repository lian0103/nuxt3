module.exports = {
  mode: 'jit', //只編譯有使用到的樣式
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    '.app.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
