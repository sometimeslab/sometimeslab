<template>
  <div class="w-full h-[50vh] block relative group grayscale hover:grayscale-0 transition-all">
    <UtilsMask />
    <nuxt-picture :src="src" :imgAttrs="{ class: 'w-full h-full object-cover object-center' }" />
    <NuxtLink v-if="link" class="absolute h-full w-full top-0 left-0"
      :to="localePath(link)">
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
});
const localePath = useLocalePath();
</script>
