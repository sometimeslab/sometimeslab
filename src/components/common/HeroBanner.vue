<template>
  <div class="w-full h-[50vh] block relative">
    <picture>
      <source :srcset="post.featuredImage.node.srcSet" />
      <img
        :src="post.featuredImage.node.guid"
        alt="hero-banner"
        class="w-full h-full object-cover"
      />
    </picture>
    <NuxtLink
      class="absolute h-full w-full top-0 left-0 bg-white/0 hover:bg-white/10 transition"
      :to="localePath('/news/'+post.slug)"
    >
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
    default(rawProps) {
      return {};
    },
  },
});
const localePath = useLocalePath();
</script>
