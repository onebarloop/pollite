<script setup lang="ts">
const create = async () => {
  const res = await useFetch('/api/create');
};
</script>

<template>
  <h1>Create Poll</h1>
  <button @click="create">Create</button>
</template>
