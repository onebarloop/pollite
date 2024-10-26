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
  <div>
    <h1>Create Poll</h1>
    <input
      v-model="title"
      placeholder="Name of the poll"
    >

    <button
      :disabled="loading"
      @click="create"
    >
      Create
    </button>
    <ul>
      <li
        v-for="poll in polls?.dbRes"
        :key="poll.id"
      >
        <a :href="poll.id">{{ poll.title }}</a>
      </li>
    </ul>
  </div>
</template>
