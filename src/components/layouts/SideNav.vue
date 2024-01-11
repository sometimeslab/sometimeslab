<template>
  <div
    class="fixed left-0 top-0 h-full w-32 bg-white flex flex-row justify-between align-center px-4 py-8 vertical-writing-lr whitespace-nowrap border-r z-10">
    <div class="m-auto flex align-center justify-center side-link-effect px-2" :class="[
      route.name == 'index' ? 'side-link-effect-active' : '',
    ]">
      <nuxt-link to="/" class="text-4xl">{{ config.public.appName }}</nuxt-link>
    </div>
    <div class="flex-1 m-auto flex align-center justify-center gap-x-2">
      <template v-for="(nav, index) in navList">
        <NuxtLink :to="nav.link" class="side-link-effect" :class="[
          route.name == nav.name
            ? 'side-link-effect-active'
            : '',
        ]">{{ $t(nav.text) }}</NuxtLink>
        <span v-if="index != navList.length - 1" class="pl-0.5">/</span>
      </template>
    </div>
    <div class="m-auto flex flex-col align-center justify-center gap-y-2">
      <NuxtImg class="h-20 object-contain cursor-pointer" @click="changeLocale()" src="/images/logo-title.png" />
      <!-- <p @click="setLocale('en')">Eng</p>
      <span class="horizontal-writing-tb">/</span>
      <p @click="setLocale('zh')">中文</p> -->
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const route = useRoute();
const { locale, setLocale } = useI18n();
const changeLocale = () => {
  if (locale.value == "en") {
    setLocale('zh')
    return;
  }
  setLocale('en')
};

const navList = ref([
  { text: "sidebar.news", link: "/news", name: "news" },
  { text: "sidebar.link", link: "/", name: "index" },
  { text: "sidebar.profile", link: "/profile", name: "profile" },
]);
</script>
