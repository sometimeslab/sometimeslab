<template>
  <div
    class="vertical-writing-lr fixed right-7 top-7 flex gap-x-2 whitespace-nowrap z-50 text-gray-400 tracking-widest"
  >
    <template v-for="(breadcrumb, index) in breadcrumbs">
      <span
        class="pl-0.5 cursor-default"
        v-if="index != 0 && breadcrumbs.length > 1"
        >\</span
      >
      <NuxtLink v-if="breadcrumbs.length != index + 1" :to="breadcrumb.path">{{
        $t(breadcrumb.name)
      }}</NuxtLink>
      <p class="cursor-default" v-else>
        {{ $te(breadcrumb.name) ? $t(breadcrumb.name) : breadcrumb.name }}
      </p>
    </template>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const breadcrumbs = computed(() => {
  // const fullPath = route.fullPath;
  // const params = fullPath.startsWith("/")
  //   ? fullPath.substring(1).split("/")
  //   : fullPath.split("/");
  // const crumbs = [];
  // let path = "";
  // params.forEach((param, index) => {
  //   path = `${path}/${param}`;
  //   crumbs.push(path)

  //   console.log(path);
  // });
  // console.log(crumbs);
  // return crumbs
  const routes = route.path.slice(1).split("/");
  if (routes[0] == "") {
    return [
      {
        path: "/",
        name: "home",
      },
    ];
  }
  let breadcrumbs = [];

  routes.reduce((path, route) => {
    breadcrumbs.push({
      path: `${path}/${route}`,
      name: route,
    });
    return (path += `/${route}`);
  }, "");

  breadcrumbs.unshift({
    path: "/",
    name: "home",
  });

  return breadcrumbs;
});
</script>
