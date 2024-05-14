<script setup lang="ts">
const title: Ref<null | string> = ref(null);

const { data, refresh, pending } = await useFetch('/api/crudtest');

const create = async () => {
  await useFetch('/api/crudtest', {
    method: 'POST',
    body: { data: title.value },
  });
  refresh();
  title.value = null;
};
</script>

<template>
  <h1>Create Poll</h1>
  <input v-model="title" placeholder="Name of the poll" />
  <button @click="create" :disabled="pending">Create</button>
  <ul>
    <li v-for="poll in data?.dbRes">
      {{ poll.title }}
    </li>
  </ul>
</template>
