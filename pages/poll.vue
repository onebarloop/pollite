<script setup lang="ts">
const { data, refresh } = await useFetch('/api/crudtest');

const titles: Ref<string[]> = ref([]);

const add = async (id: string, index: number) => {
  await useFetch('/api/option', {
    method: 'POST',
    body: {
      id,
      title: titles.value[index],
    },
  });
  refresh();
};
</script>

<template>
  <h1>Show Poll</h1>
  <ul>
    <li v-for="(poll, index) in data?.dbRes" style="margin-bottom: 12px">
      <a :href="poll.id">{{ poll.title }}</a>
      <ul>
        <li v-for="option in poll.options">{{ option.title }}</li>
      </ul>
      <div style="display: flex">
        <input v-model="titles[index]" placeholder="New Option" />
        <button @click="add(poll.id, index)">Add option</button>
      </div>
    </li>
  </ul>
</template>
