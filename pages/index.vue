<script setup lang="ts">
const { data } = await useFetch('/api/polls');

const polls = ref(data);

const title: Ref<null | string> = ref(null);

const loading: Ref<boolean> = ref(false);

const create = async () => {
  loading.value = true;
  const res = await $fetch('/api/polls', {
    method: 'POST',
    body: { data: title.value },
  });
  polls.value = res;
  title.value = null;
  loading.value = false;
};
</script>

<template>
  <h1>Create Poll</h1>
  <input v-model="title" placeholder="Name of the poll" />
  <button @click="create" :disabled="loading">Create</button>
  <ul>
    <li v-for="poll in polls?.dbRes">
      <a :href="poll.id">{{ poll.title }}</a>
    </li>
  </ul>
</template>
