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
    <input
      id="option"
      v-model="optionTitle"
    >
    <button
      :disabled="loading"
      @click="add(poll.dbRes.id)"
    >
      Add
    </button>
    <ul>
      <li
        v-for="option in poll.dbRes.options"
        :key="option.id"
      >
        {{ option.title }}
      </li>
    </ul>
  </div>
  <div v-else>
    <h2>Poll does not exist</h2>
  </div>
</template>
