<template>
  <q-page padding>
    <h2>Course</h2>
    <div class="text-subtitle1">
      {{ route.params.id }}
    </div>
  </q-page>
</template>

<script lang="ts" setup>
const route = useRoute();
console.log(route.params.id);
</script>

<style></style>
