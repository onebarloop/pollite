<script setup lang="ts">
const route = useRoute();

const optionTitle = ref(null);

const { data, refresh } = await useFetch(`/api/poll/${route.params.id}`);

const add = async (id: string) => {
  await $fetch('/api/option', {
    method: 'POST',
    body: {
      id,
      title: optionTitle.value,
    },
  });
  refresh();
};
</script>

<template>
  <h2 v-if="!data">...loading</h2>
  <div v-else>
    <div v-if="data.dbRes">
      <h2>{{ data.dbRes?.title }}</h2>
      <label for="option">Add a new Option to poll: </label>
      <input v-model="optionTitle" id="option" />
      <button @click="add(data.dbRes.id)">Add</button>
      <ul>
        <li v-for="option in data.dbRes.options">
          {{ option.title }}
        </li>
      </ul>
    </div>
    <div v-else>
      <h2>Poll does not exist</h2>
    </div>
  </div>
</template>
