<script setup lang="ts">
const title: Ref<null | string> = ref(null);

const loading: Ref<boolean> = ref(false);

const { data, refresh } = await useFetch('/api/crudtest');

const create = async () => {
  loading.value = true;
  await useFetch('/api/crudtest', {
    method: 'POST',
    body: { data: title.value },
  });
  title.value = null;
  refresh().then(() => {
    loading.value = false;
  });
};
</script>

<template>
  <h1>Create Poll</h1>
  <input v-model="title" placeholder="Name of the poll" />
  <button @click="create" :disabled="loading">Create</button>
  <ul>
    <li v-for="poll in data?.dbRes">
      {{ poll.title }}
    </li>
  </ul>
</template>
