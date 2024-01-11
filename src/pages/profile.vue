<template>
  <div class="px-24 py-32 grid grid-cols-5 gap-16 min-h-screen relative">
    <div class="lg:col-span-3 col-span-5">
      <section
        v-for="section in $tm('profile.content')"
        :ref="(el) => sectionRefs.push(el)"
        :data-src="section.img"
      >
        <h1 class="text-4xl py-4" v-if="section.title">{{ section.title }}</h1>
        <nuxt-img class="block lg:hidden" :src="section.img" />
        <p
          v-for="paragraph in section.paragraphs"
          class="py-4 tracking-wider leading-7"
        >
          {{ paragraph }}
        </p>
      </section>
    </div>
    <div class="hidden lg:block col-span-2">
      <nuxt-img
        v-if="imgSrc"
        class="sticky top-1/2 transform -translate-y-1/2 transition-all duration-500"
        :class="imageClass"
        id="profile-img"
        :src="imgSrc"
      />
    </div>
  </div>
</template>

<script setup>
import debounceRef from "@/utils/debounce";
const imgSrc = debounceRef("", 200);
const sectionRefs = ref([]);
const imageClass = ref("");
let timer;

watch(imgSrc, () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    imageClass.value = "blur-0";
  }, 100);
});
onMounted(() => {
  const imgComponentObserve = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imageClass.value = "blur-sm";
          imgSrc.value = entry.target.dataset.src;
        }
      });
    },
    {
      threshold: 0.8,
    }
  );
  sectionRefs.value.forEach((el) => {
    imgComponentObserve.observe(el);
  });
});
</script>
