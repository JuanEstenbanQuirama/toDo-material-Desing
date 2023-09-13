import initialToDos from "../mock/toDo";
import { ref, computed } from "vue";

const toDos = ref([...initialToDos]);

const toDosIncompleted = computed(() =>
  toDos.value.filter((t) => !t.completed)
);

const toDosCompleted = computed(() => toDos.value.filter((t) => t.completed));

const toggle = (id) => {
  const toDo = toDos.value.find((t) => t.id === id);
  if (toDo?.completed !== undefined) {
    toDo.completed = !toDo.completed;
  }
};

const deleteToDo = (id) => {
  toDos.value = toDos.value.filter((t) => t.id !== id);
};

const addToDo = (name) => {
  const newToDo = { id: toDos.value.length + 1, name, completed: false };
  toDos.value.push(newToDo);
};

const toDosFactory = () => ({
  toDosIncompleted,
  toDosCompleted,
  toggle,
  deleteToDo,
  addToDo,
});

export { toDosFactory };
