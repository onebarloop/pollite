<script setup lang="ts">
const { data } = await useFetch('/api/crudtest');
</script>

<template>
  <h1>Show Poll</h1>
  <ul>
    <li v-for="poll in data?.dbRes">
      {{ poll.title }}
    </li>
  </ul>
</template>
