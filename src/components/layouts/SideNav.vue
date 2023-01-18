<template>
  <div
    class="fixed left-0 h-full w-32 bg-gray-100 flex flex-row justify-between align-center px-4 py-8 vertical-writing-lr whitespace-nowrap"
  >
    <div class="m-auto flex align-center justify-center side-link-effect px-2">
      <nuxt-link to="/" class="text-4xl">{{ config.appName }}</nuxt-link>
    </div>
    <div class="flex-1 m-auto flex align-center justify-center gap-x-2">
      <template v-for="(nav, index) in navList">
        <NuxtLink :to="localePath(nav.link)" class="side-link-effect">{{
          $t(nav.text)
        }}</NuxtLink>
        <span v-if="index != navList.length - 1" class="pl-0.5">/</span>
      </template>
    </div>
    <div class="m-auto flex flex-col align-center justify-center gap-y-2">
      <!-- <NuxtImg preset="cover" class="w-14 h-14" src="/img/logo.png" /> -->
      <NuxtLink class="" to="/">底部</NuxtLink>
      <span class="horizontal-writing-tb">/</span>
      <NuxtLink class="" to="/">底部</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const localePath = useLocalePath();

const navList = ref([
  { text: "link", link: "/" },
  { text: "link", link: "/" },
  { text: "link", link: "/" },
]);
</script>
