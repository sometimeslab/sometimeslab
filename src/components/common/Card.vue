<template>
  <div
    class="flex flex-col aspect-square w-full border-b border-r cursor-pointer relative group grayscale hover:grayscale-0 transition-all"
  >
    <div class="relative h-3/4 w-full">
      <UtilsMask />
      <nuxt-img :src="src" class="object-contain h-full w-full" />
    </div>
    <NuxtLink
      v-if="link"
      class="absolute h-full w-full top-0 left-0"
      :to="localePath(link)"
    />
    <div
      v-if="title"
      class="text-center text-sm flex-1 flex justify-center items-center mx-3"
    >
      {{ title }}
    </div>
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

const router = useRouter();
</script>
