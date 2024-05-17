<script setup lang="ts">
const title: Ref<null | string> = ref(null);

const loading: Ref<boolean> = ref(false);

const { data, refresh } = await useFetch('/api/polls');

const create = async () => {
  loading.value = true;
  await useFetch('/api/polls', {
    method: 'POST',
    body: { data: title.value },
  });
  await refresh();
  title.value = null;
  loading.value = false;
};
</script>

<template>
  <h1>Create Poll</h1>
  <input v-model="title" placeholder="Name of the poll" />
  <button @click="create" :disabled="loading">Create</button>
  <ul>
    <li v-for="poll in data?.dbRes">
      <a :href="poll.id">{{ poll.title }}</a>
    </li>
  </ul>
</template>
