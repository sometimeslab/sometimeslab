<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectFade, SwiperNavigation]"
    :slides-per-view="1"
    :loop="true"
    :effect="'fade'"
    :autoplay="{
      delay: 6000,
    }"
    class="select-none"
    @swiper="onSwiper"
  >
    <SwiperSlide v-for="data in swiperData" style="height: 100vh">
      <nuxt-link :to="localePath(data.link)">
        <nuxt-img preset="cover" class="h-full w-full" :src="data.image" />
      </nuxt-link>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
const localePath = useLocalePath()
const swiper = ref(null);
const onSwiper = (newSwiper) => {
  swiper.value = newSwiper;
};

const swiperData = ref([
  {
    image: "/img/banner-1.jpg",
    link: "/",
  },
  {
    image: "/img/banner-2.jpg",
    link: "/",
  },
  {
    image: "/img/banner-3.jpg",
    link: "/",
  },
]);
</script>
