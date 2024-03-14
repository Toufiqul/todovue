import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
        {
            id: 1,
            title: 'Task 1',
            done: false,
            dueDate: '2024-12-19'
        },
        {
            id: 2,
            title: 'Task 2',
            done: false,
            dueDate: '2024-12-20'
        },
        {
            id: 3,
            title: 'Task 3',
            done: false,
            dueDate: ''
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
        // console.log("delete task mutation")
        // console.log(state.tasks)
        // console.log(typeof id)
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
    },
    updateTaskTitle(state,payload) {
        // console.log(payload)
        let task = state.tasks.filter(task => task.id === payload.id)[0]
        task.title = payload.title
    },
    updateTaskDueDate(state,payload){
        let task = state.tasks.filter(task => task.id === payload.id)[0]
        task.dueDate = payload.dueDate
    }
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle)
      commit('showSnackbar', 'Task added!')
    },
    deleteTask({ commit }, id) {
        // console.log(id)
      commit('deleteTask', id)
      commit('showSnackbar', 'Task deleted!')
    },
    updateTaskTitle({ commit }, payload) {
        // console.log(id)
      commit('updateTaskTitle', payload)
      commit('showSnackbar', 'Task updated!')
    },
    updateTaskDueDate({commit }, payload) {
        commit('updateTaskDueDate', payload)
        commit('showSnackbar', 'Due date updated!')
    }
  },
  getters: {

  }
})