<template>
  <nav
    class="navbar navbar-expand-lg shadow-md py-2 px-2 bg-white relative flex items-center w-full justify-between"
  >
    <div class="navbar-collapse collapse grow items-center">
      <NuxtLink
        to="/main"
        class="nav-link block pr-2 px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
      >
        Home
      </NuxtLink>
    </div>
    <div class="px-2">
      <NuxtLink
        to="/"
        class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
      >
        登出
      </NuxtLink>
    </div>
  </nav>
</template>
