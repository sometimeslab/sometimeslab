<template>
  <h1>{{ post.title }}</h1>
  <div v-html="post.content"></div>
</template>

<script setup>
const route = useRoute();

const query = gql`
{
  post(id: "${route.params.slug}", idType: SLUG) {
    content
    postId
    slug
    status
    title
    date
    categories {
      nodes {
        slug
        name
        count
      }
    }
    featuredImage {
      node {
        sourceUrl
        srcSet
        title
      }
    }
  }
}
`;
const post = ref(null);
const { data } = await useAsyncQuery(query);
if (data?.value.post) {
  post.value = data.value.post;
}
</script>