<template>
  <div class="relative">
    <LayoutsSideNav />
    <div class="pl-32 bg-white min-h-screen">
      <slot />
    </div>
    <LayoutsSideBreadcrumbs />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

useHead({
  title: 'Sometimes Lab',
  
  bodyAttrs: {
    class: computed(() => {
      if (locale.value == "en") return 'en';
      if (locale.value == "zh") return 'zh';
    }),
  },
})
</script>
