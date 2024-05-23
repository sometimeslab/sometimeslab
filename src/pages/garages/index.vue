<template>
  <div class="mt-36">
    <div class="mb-12 pr-16 lg:pr-56 md:pr-28 border-b border-t">
      <CommonHeroBanner
        class="border-r"
        title="果實的渴望"
        src="/images/hatenakikatubo-mv.jpg"
        link="/garages/jay-1"
      />
    </div>

    <div class="grid gap-y-12">
      <div
        class="pr-16 lg:pr-56 md:pr-28 card-container"
      >
        <CommonCard
          v-for="index in 6"
          src="/images/hatenakikatubo.jpg"
          link="/garages/jay-1"
          title="果實的渴望"
        />
      </div>
      <div
        class="pr-16 lg:pr-56 md:pr-28 card-container-sm"
      >
        <CommonCard
          v-for="index in 6"
          src="/images/hatenakikatubo.jpg"
          link="/garages/jay-1"
          title="果實的渴望"
        />
      </div>
    </div>
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
