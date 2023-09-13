<script setup>

import { toDosFactory } from '../utils/toDosSetup'

const {toDosIncompleted, toDosCompleted, toggle, deleteToDo} = toDosFactory();

</script>

<template lang="pug">
h3 ToDo List
    ul#incomplete-tasks
        li(v-for="toDo in toDosIncompleted" :ley="toDo.id" @click="toggle(toDo.id)")
            input(type="checkbox")
            label {{ toDo.name }}
            button(@click="deleteToDo(toDo.id)") Delete
h3 Completed
    ul#completed-tasks
        li(v-for="toDo in toDosCompleted" :ley="toDo.id" @click="toggle(toDo.id)")
            input(type="checkbox" checked)
            label {{ toDo.name }}
            button(@click="deleteToDo(toDo.id)") Delete
</template>
