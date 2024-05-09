<script setup lang="ts">
const { data } = await useFetch('/api/db');
</script>

<template>
  <div>
    <h1>Pollite</h1>
    {{ data?.dbRes[0].title }}
  </div>
</template>
