<script setup>
import { toDosFactory } from "../utils/toDosSetup";
import router from "../router";

const { addToDo } = toDosFactory();

const addAndNavigate = (name) => {
  addToDo(name);
  router.push("/");
};
</script>

<template lang="pug">
div
    label(for="new-task") New toDo
    input#new-task(type="text", v-model="name")
    button(type="add", @click="addAndNavigate(name)") Add
</template>
