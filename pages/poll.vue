<script setup lang="ts">
const { data } = await useFetch('/api/polls');

const polls = ref(data);

const titles: Ref<string[]> = ref([]);

const add = async (id: string, index: number) => {
  const res = await $fetch('/api/option', {
    method: 'POST',
    body: {
      id,
      title: titles.value[index],
    },
  });
  polls.value = res;
};
</script>

<template>
  <div>
    <h1>Show Poll</h1>

    <ul>
      <li
        v-for="(poll, index) in data?.dbRes"
        :key="index"
        style="margin-bottom: 12px"
      >
        <a :href="poll.id">{{ poll.title }}</a>
        <ul>
          <li
            v-for="option in poll.options"
            :key="option.id"
          >
            {{ option.title }}
          </li>
        </ul>
        <div style="display: flex">
          <input
            v-model="titles[index]"
            placeholder="New Option"
          >
          <button @click="add(poll.id, index)">
            Add option
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
