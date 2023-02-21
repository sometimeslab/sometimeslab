<template>
  <CommonHeroBanner v-if="featurePost" :post="featurePost" />
</template>

<script setup>
const query = gql`
  {
    posts(first: 10) {
      nodes {
        databaseId
        slug
        status
        featuredImage {
          node {
            srcSet
            title
            databaseId
            date
            guid
          }
        }
        categories {
          nodes {
            name
            slug
            count
          }
        }
        date
      }
    }
  }
`;
const featurePost = ref(null);
const { data } = await useAsyncQuery(query);

if (data?.value.posts) {
  const posts = data.value.posts.nodes;
  featurePost.value = posts[0];
}
</script>
