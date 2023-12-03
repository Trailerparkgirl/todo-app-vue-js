import { createStore } from 'vuex'

const store = createStore({
    state: {
        todos: [
            {
              'id': 1,
              'title': 'Finish Vue Screencast',
              'completed': false,
              'editing': false,
            },
            {
              'id': 2,
              'title': 'Take over world',
              'completed': false,
              'editing': false,
            },
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
        }
      },
    actions:{
        addTodoAction({ commit }, todo) {
            commit('addTodoMutation', todo);
        },
        removeTodoAction({ commit }, id) {
            commit('removeTodoMutation', id);
        },
        updateTodoAction({ commit }, updatedTodo) {
            commit('updateTodoMutation', updatedTodo);
        },
    },
    getters:{

    }
})
export default store;