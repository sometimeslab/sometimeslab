<template>
  <div>
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
          <div
            class="pagination-left w-1/3 h-full"
            @click="swiper.slidePrev()"
          ></div>
          <nuxt-link
            :to="localePath(data.link)"
            class="pagination-center w-1/3"
          ></nuxt-link>
          <div
            class="pagination-right w-1/3 h-full"
            @click="swiper.slideNext()"
          ></div>
        </div>
        <nuxt-img
          preset="cover"
          class="h-full w-full object-cover"
          :src="data.image"
        />
        <div class="z-10 absolute left-4 right-2/3 bottom-2.5 text-white">
          {{ data.text }}
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="container px-8 py-4 flex flex-col gap-4">
      <h1 class="text-4xl mt-20">Sometimes Lab</h1>
      <p>
        Sometimes we need "connection, bond". The intention is to connect the
        client to the destination and connect the project and the creator.
      </p>
      <div class="grid grid-cols-3 gap-3">
        <nuxt-img
          src="/images/mazco-1.jpg"
          class="rounded-md object-cover h-full w-full"
        />
        <nuxt-img
          src="/images/mazco-2.jpg"
          class="rounded-md object-cover h-full w-full"
        />
        <nuxt-img
          src="/images/mazco-3.jpg"
          class="rounded-md object-cover h-full w-full"
        />
      </div>
      <h1 class="text-4xl">Sometimes Lab</h1>
      <p>
        Sometimes we need "connection, bond". The intention is to connect the
        client to the destination and connect the project and the creator.
      </p>
      <div class="grid grid-cols-3 gap-3">
        <nuxt-img
          src="/images/mazco-1.jpg"
          class="rounded-md object-cover h-full w-full"
        />
        <nuxt-img
          src="/images/mazco-2.jpg"
          class="rounded-md object-cover h-full w-full"
        />
        <nuxt-img
          src="/images/mazco-3.jpg"
          class="rounded-md object-cover h-full w-full"
        />
      </div>
      <h1 class="text-4xl">Sometimes Lab</h1>
      <p>
        Sometimes we need "connection, bond". The intention is to connect the
        client to the destination and connect the project and the creator.
      </p>
      <div class="grid grid-cols-3 gap-3">
        <nuxt-img
          src="/images/mazco-1.jpg"
          class="rounded-md object-cover h-full w-full"
        />
        <nuxt-img
          src="/images/mazco-2.jpg"
          class="rounded-md object-cover h-full w-full"
        />
        <nuxt-img
          src="/images/mazco-3.jpg"
          class="rounded-md object-cover h-full w-full"
        />
      </div>
    </div>
  </div>
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
    text: "Sometimes Lab 0",
  },
  {
    image: "/images/mazco-2.jpg",
    link: "/garages",
    text: "Sometimes Lab 1",
  },
  {
    image: "/images/mazco-3.jpg",
    link: "/garages",
    text: "Sometimes Lab 2",
  },
  {
    image: "/images/mazco-4.jpg",
    link: "/garages",
    text: "Sometimes Lab 3",
  },
  {
    image: "/images/mazco-5.jpg",
    link: "/garages",
    text: "Sometimes Lab 4",
  },
  {
    image: "/images/mazco-6.jpg",
    link: "/garages",
    text: "Sometimes Lab 5",
  },
  {
    image: "/images/mazco-7.jpg",
    link: "/garages",
    text: "Sometimes Lab 6",
  },
  {
    image: "/images/mazco-8.jpg",
    link: "/garages",
    text: "Sometimes Lab 7",
  },
  {
    image: "/images/mazco-9.jpg",
    link: "/garages",
    text: "Sometimes Lab 8",
  },
  {
    image: "/images/mazco-10.jpg",
    link: "/garages",
    text: "Sometimes Lab 9",
  },
]);
</script>

<style scoped>
.pagination {
  &-left {
    cursor: url("/assets/img/prev.png") 30 30, auto;
  }
  &-right {
    cursor: url("/assets/img/next.png") 30 30, auto;
  }
  &-center {
    cursor: url("/assets/img/open.png") 30 30, auto;
  }
}
</style>
