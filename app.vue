<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const title = ref('Vue & Nuxt Mastery class');
const description = ref('짐코딩과 함께 Vue와 Nuxt를 마스터하세요!');

// useHead({
//   title,
//   meta: [{ name: 'description', content: description }],
// });

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogImage: '/img/og-image.webp',
});
</script>
