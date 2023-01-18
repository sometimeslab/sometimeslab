<template>
  <div class="vertical-writing-lr fixed right-7 top-7 flex gap-x-2 whitespace-nowrap z-50 text-gray-600/70 tracking-widest">
    <NuxtLink :to="switchLocalePath('en')">英文</NuxtLink>
    <span class="pl-0.5">/</span>
    <NuxtLink :to="switchLocalePath('zh-tw')">中文</NuxtLink>
    <span class="pl-0.5">/</span>
    <NuxtLink :to="localePath('about')">麵包屑</NuxtLink>
  </div>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
</script>