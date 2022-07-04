<script setup>
import facebookIcon from '~icons/typcn/social-facebook';
import lineIcon from '~icons/fa6-brands/line';
const router = useRouter();

const handleLoign = () => {
  router.push({ path: '/main' });
};
</script>

<template>
  <div class="loginForm">
    <div
      class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      <div
        class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="w-full"
          alt="Sample image"
        />
      </div>
      <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <form @keyup.enter.native="handleLoign">
          <div
            class="flex flex-row items-center justify-center lg:justify-start"
          >
            <p class="text-lg mb-0 mr-4 font-bold">第三方登入</p>
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="other-login"
            >
              <facebook-icon />
            </button>

            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="other-login"
            >
              <line-icon />
            </button>
          </div>
          <div
            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p class="text-center font-semibold mx-4 mb-0">Or</p>
          </div>

          <!-- Email input -->
          <div class="mb-6">
            <input
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
            />
          </div>

          <!-- Password input -->
          <div class="mb-6">
            <input
              type="password"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
            />
          </div>

          <div class="flex justify-between items-center mb-6">
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="exampleCheck2"
                >記住帳號</label
              >
            </div>
            <a href="#!" class="text-gray-800">忘記密碼?</a>
          </div>

          <div class="text-center lg:text-left">
            <button
              @click="handleLoign"
              type="button"
              class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              登入
            </button>
            <p class="text-sm font-semibold mt-2 pt-1 mb-0">
              尚未註冊?
              <a
                href="#!"
                class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >註冊</a
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.loginForm {
  background: rgba(238, 245, 235, 0.5);
  @apply p-6 text-gray-800 rounded;
}
.other-login {
  @apply inline-block p-2 text-xl bg-blue-600 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1;
}
</style>
