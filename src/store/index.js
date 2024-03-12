import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
        {
            id: 1,
            title: 'Task 1',
            done: false
        },
        {
            id: 2,
            title: 'Task 2',
            done: false
        },
        {
            id: 3,
            title: 'Task 3',
            done: false
        }
    ],
    snackbar: {
        show:true,
        text:"snackbar text"
    }
  },
  getters: {
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false
      }
      state.tasks.push(newTask)
    },
    doneTask(state, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    showSnackbar(state, text) {
      let timeout = 0
      if (state.snackbar.show) {
        state.snackbar.show = false
        timeout = 300
      }
      setTimeout(() => {
        state.snackbar.show = true
        state.snackbar.text = text
      }, timeout)
    },
    hideSnackbar(state) {
      state.snackbar.show = false
    }
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle)
      commit('showSnackbar', 'Task added!')
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id)
      commit('showSnackbar', 'Task deleted!')
    }
  },
  getters: {

  }
})