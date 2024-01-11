<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectFade, SwiperPagination]"
    :pagination="{
      clickable: true,
    }"
    :slides-per-view="1"
    :loop="true"
    :effect="'fade'"
    :autoplay="{
      delay: 2000,
    }"
    class="select-none"
    @swiper="onSwiper"
  >
    <SwiperSlide v-for="data in swiperData" style="height: 100vh">
      <nuxt-link :to="localePath(data.link)">
        <nuxt-img
          preset="cover"
          class="h-full w-full object-cover"
          :src="data.image"
        />
      </nuxt-link>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
const localePath = useLocalePath();
const swiper = ref(null);
const onSwiper = (newSwiper) => {
  swiper.value = newSwiper;
};

const swiperData = ref([
  {
    image: "/images/mazco-1.jpg",
    link: "/",
  },
  {
    image: "/images/mazco-2.jpg",
    link: "/",
  },
  {
    image: "/images/mazco-3.jpg",
    link: "/",
  },
  {
    image: "/images/mazco-4.jpg",
    link: "/",
  },
  {
    image: "/images/mazco-5.jpg",
    link: "/",
  },
  {
    image: "/images/mazco-6.jpg",
    link: "/",
  },
  {
    image: "/images/mazco-7.jpg",
    link: "/",
  },
  {
    image: "/images/mazco-8.jpg",
    link: "/",
  },
  {
    image: "/images/mazco-9.jpg",
    link: "/",
  },
  {
    image: "/images/mazco-10.jpg",
    link: "/",
  },
]);
</script>
