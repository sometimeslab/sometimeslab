<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12">
    <CommonHeroBanner class="col-span-2 md:col-span-3 lg:col-span-5" src="/images/banner-2.jpg" link="/news/jay-1" />

    <CommonCard
      v-for="index in 50"
      src="/images/banner-2.jpg"
      link="/news/jay-1"
    />
  </div>
</template>

<script setup>
// const query = gql`
//   {
//     posts(first: 10) {
//       nodes {
//         databaseId
//         slug
//         status
//         featuredImage {
//           node {
//             srcSet
//             title
//             databaseId
//             date
//             guid
//           }
//         }
//         categories {
//           nodes {
//             name
//             slug
//             count
//           }
//         }
//         date
//       }
//     }
//   }
// `;
// const featurePost = ref(null);
// const { data } = await useAsyncQuery(query);

// if (data?.value.posts) {
//   const posts = data.value.posts.nodes;
//   featurePost.value = posts[0];
// }
</script>
