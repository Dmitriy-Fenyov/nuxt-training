
<template>
  <div class="app">
    <h1>To do list</h1>
    <div>
      <input type="text" v-model="todo" placeholder="Напишите задачу.." />
      <button type="button" @click="addDo">Добавить задачу</button>
    </div>
    <ul v-if="todos.length > 0">
      <li class="todo" v-for="(todo, id) in todos" :key="id">
        <input type="checkbox" v-model="todo.completed" />
        <span>{{ todo.todo }}</span>
        <button type="button" @click="deleteDo(id)">Удалить задачу</button>
      </li>
    </ul>
    <p v-else>Список задач пуст...</p>
  </div>
</template>
  
<script setup>

const { addTodo, todo, todos, deleteTodo } = useToDo();

function addDo () {
  addTodo()
}

function deleteDo (id) {
  deleteTodo(id)
}

</script>

<style lang="scss" scoped>
.app {
  padding: 20px;
  width: 500px;
  border: 2px solid red;
  border-radius: 20px;
  background-color: #fff;

  p {
  margin: 50px 0 0 20px;
  }
}

.todo {
  display: flex;
  align-items: center;
  min-height: 30px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  input:checked {
    ~ span {
      text-decoration: line-through;
    }

    ~ button {
      display: none;
    }
  }

  span {
    margin-right: auto;
  }
}
</style>
  

