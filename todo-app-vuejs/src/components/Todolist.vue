<template>
    <div>
      <input type="text" class="todo-input" placeholder="What needs to be done" v-model="newTodo" @keyup.enter="addTodo">
      <todo-item v-for="todo in this.$store.state.todos" :key="todo.id" :todo="todo">
      </todo-item>
    </div>
  </template>
  
  <script>
  import TodoItem from './TodoItem.vue'
  
  export default {
    name: 'todo-list',
    components: {
      TodoItem,
    },
    data () {
      return {
        newTodo: '',
        idForTodo: 3,
      }
    },
    created() {
      this.$store.dispatch('retrieveTodos')
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim().length === 0) {
                return;
            }

            this.$store.dispatch('addTodoAction', {
                id: this.idForTodo,
                title: this.newTodo,
                completed: false,
            });

            this.newTodo = '';
            this.idForTodo++;
        },
    }
  }
  </script>
  
  <style lang="scss">

    .todo-input {
      width: 100%;
      padding: 10px 18px;
      font-size: 18px;
      margin-bottom: 16px;
  
      &:focus {
        outline: 0;
      }
    }
  
    .todo-item {
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      animation-duration: 0.3s;
    }
  
    .remove-item {
      cursor: pointer;
      margin-left: 14px;
      &:hover {
        color: black;
      }
    }
  
    .todo-item-left { // later
      display: flex;
      align-items: center;
    }
  
    .todo-item-label {
      padding: 10px;
      border: 1px solid white;
      margin-left: 12px;
    }
  
    .todo-item-edit {
      font-size: 24px;
      color: #2c3e50;
      margin-left: 12px;
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc; //override defaults
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
  
      &:focus {
        outline: none;
      }
    }
  
    .completed {
      text-decoration: line-through;
      color: grey;
    }
  
    .extra-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      border-top: 1px solid lightgrey;
      padding-top: 14px;
      margin-bottom: 14px;
    }
  
    button {
      font-size: 14px;
      background-color: white;
      appearance: none;
  
      &:hover {
        background: lightgreen;
      }
  
      &:focus {
        outline: none;
      }
    }
  
    .active {
      background: lightgreen;
    }
  
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
  </style>