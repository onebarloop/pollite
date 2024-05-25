<script setup lang="ts">
const route = useRoute();

const optionTitle = ref(null);
const loading: Ref<boolean> = ref(false);

const { data } = await useFetch(`/api/poll/${route.params.id}`);

const poll = ref(data);

const add = async (id: string) => {
  loading.value = true;
  const res = await $fetch(`/api/poll/${id}`, {
    method: 'POST',
    body: {
      id,
      title: optionTitle.value,
    },
  });
  poll.value = res;
  optionTitle.value = null;
  loading.value = false;
};
</script>

<template>
  <div v-if="poll?.dbRes">
    <h2>{{ poll.dbRes?.title }}</h2>
    <label for="option">Add a new Option to poll: </label>
    <input v-model="optionTitle" id="option" />
    <button @click="add(poll.dbRes.id)" :disabled="loading">Add</button>
    <ul>
      <li v-for="option in poll.dbRes.options">
        {{ option.title }}
      </li>
    </ul>
  </div>
  <div v-else>
    <h2>Poll does not exist</h2>
  </div>
</template>
