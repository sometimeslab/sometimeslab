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
      delay: 6000,
      disableOnInteraction: false,
    }"
    class="select-none"
    @swiper="onSwiper"
  >
    <SwiperSlide v-for="data in swiperData" style="height: 100vh">
      <div class="absolute inset-y-0 inset-x-0 z-10 flex pagination">
        <div class="left w-1/3 h-full" @click="swiper.slidePrev()"></div>
        <nuxt-link :to="localePath(data.link)" class="center w-1/3"></nuxt-link>
        <div class="right w-1/3 h-full" @click="swiper.slideNext()"></div>
      </div>
      <nuxt-img
        preset="cover"
        class="h-full w-full object-cover"
        :src="data.image"
      />
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
    link: "/garages",
  },
  {
    image: "/images/mazco-2.jpg",
    link: "/garages",
  },
  {
    image: "/images/mazco-3.jpg",
    link: "/garages",
  },
  {
    image: "/images/mazco-4.jpg",
    link: "/garages",
  },
  {
    image: "/images/mazco-5.jpg",
    link: "/garages",
  },
  {
    image: "/images/mazco-6.jpg",
    link: "/garages",
  },
  {
    image: "/images/mazco-7.jpg",
    link: "/garages",
  },
  {
    image: "/images/mazco-8.jpg",
    link: "/garages",
  },
  {
    image: "/images/mazco-9.jpg",
    link: "/garages",
  },
  {
    image: "/images/mazco-10.jpg",
    link: "/garages",
  },
]);
</script>

<style scoped>
.pagination .left {
  cursor: url("/assets/img/prev.png") 30 30, auto;
}
.pagination .right {
  cursor: url("/assets/img/next.png") 30 30, auto;
}
.pagination .center {
  cursor: url("/assets/img/open.png") 30 30, auto;
}
</style>
