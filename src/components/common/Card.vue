<template>
  <div @click="navigateTo(link)" class="aspect-square w-full border bg-gray-400/20 block cursor-pointer relative group grayscale hover:grayscale-0 transition-all">
    <UtilsMask />
    <nuxt-img :src="src" class="aspect-square w-full object-cover" />
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

const router = useRouter();
</script>
