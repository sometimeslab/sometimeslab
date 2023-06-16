<template>
  <div
    class="w-full h-[60vh] block relative group grayscale hover:grayscale-0 transition-all"
  >
    <UtilsMask />
    <nuxt-picture
      :src="src"
      :imgAttrs="{ class: 'w-full h-full object-cover object-center' }"
    />
    <NuxtLink
      v-if="link"
      class="absolute h-full w-full top-0 left-0"
      :to="localePath(link)"
    />
    <p
      v-if="title"
      class="text-center text-sm absolute w-full bottom-16"
    >
      {{ title }}
    </p>
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
  title: {
    type: String,
    required: false,
  },
});
const localePath = useLocalePath();
</script>
