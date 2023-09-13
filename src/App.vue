<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<template lang="pug">
div.navBar
  ul 
    RouterLink(to="/") ToDo List
    RouterLink(to="/new") New todo
  RouterView 
</template>
