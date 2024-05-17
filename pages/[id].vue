<script setup lang="ts">
const route = useRoute();

const { data, refresh } = await useFetch(`/api/polls/${route.params.id}`);
</script>

<template>
  <h2 v-if="!data">...loading</h2>
  <div v-else>
    <div v-if="data.dbRes != null">
      <h2>{{ data.dbRes?.title }}</h2>
      <ul>
        <li v-for="option in data.dbRes.options">
          {{ option.title }}
        </li>
      </ul>
    </div>
    <div v-else>
      <h2>No Data</h2>
    </div>
  </div>
</template>
