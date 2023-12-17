import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

const store = createStore({
    state: {
        todos: [
            // {
            //   'id': 1,
            //   'title': 'Finish Vue Screencast',
            //   'completed': false,
            //   'editing': false,
            // },
            // {
            //   'id': 2,
            //   'title': 'Take over world',
            //   'completed': false,
            //   'editing': false,
            // },
          ]
    },
    mutations: {
        addTodoMutation(state, todo) {
          state.todos.push(todo);
        },
        removeTodoMutation(state, id) {
          const index = state.todos.findIndex(item => item.id === id);
          state.todos.splice(index, 1);
        },
        updateTodoMutation(state, updatedTodo) {
          const index = state.todos.findIndex(item => item.id === updatedTodo.id);
          state.todos.splice(index, 1, updatedTodo);
        },
        retrieveTodos(state, todos){
          state.todos = todos
        }
      },
    actions:{
      retrieveTodos({ commit }){
        axios.get('/todos')
          .then(response => {
            commit('retrieveTodos', response.data)
          })
          .catch(error => {
            console.log(error)
          })
      },
      addTodoAction({ commit }, todo) {
        axios.post('/todos', {
          title: todo.title,
          completed: false,
        })
          .then(response => {
            commit('addTodoMutation', response.data)
          })
          .catch(error => {
            console.log(error)
          })
      },
      removeTodoAction({ commit }, id) {
        axios.delete('/todos/' + id)
          .then(response => {
            commit('removeTodoMutation', id)
          })
          .catch(error => {
            console.log(error)
          })
      },
      updateTodoAction({ commit }, updatedTodo) {
        axios.patch('/todos/' + updatedTodo.id, {
          title: updatedTodo.title,
          completed: updatedTodo.completed,
        })
          .then(response => {
            commit('updateTodoMutation', response.data)
          })
          .catch(error => {
            console.log(error)
          })
      },
    },
    getters:{

    }
})
export default store;