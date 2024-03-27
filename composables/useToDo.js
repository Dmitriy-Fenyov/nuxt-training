import { ref } from "vue";

export const useToDo = () => {
  function onSubmitt() {
    console.log('Я тут');
  };

const todo = ref("");
const todos = ref([
  { todo: "Сходить в кино", completed: false },
  { todo: "Погулять с собакой", completed: true },
  { todo: "Встретится с Шерлоком на Бэйкер Стрит", completed: false }
]);

const addTodo = () => {
  if (todo.value.trim() !== "") {
    const newTodo = { todo: todo.value, completed: false };
    todos.value.push(newTodo);
    todo.value = "";
  }
};
const deleteTodo = (id) => {
  todos.value.splice(id, 1);
};

    return {
      onSubmitt,
      addTodo,
      todo,
      todos,
      deleteTodo
    }
}