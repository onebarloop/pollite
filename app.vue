<script setup lang="ts">
const { data } = await useFetch('/api/db');
</script>

<template>
  <div>
    <h1>Hi</h1>
    {{ data?.dbRes }}
  </div>
</template>
