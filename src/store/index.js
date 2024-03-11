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
    ]
  },
  getters: {
  },
  mutations: {

    addTask(state,newTaskTitle){
        let newTask ={id:Date.now(),
        title: newTaskTitle,
        done: false
        }
        state.tasks.push(newTask);
    },       
    doneTask(state,id){
        // let task = this.tasks[id-1];
        // task.done=!task.done;
        // console.log(task);

        let task = state.tasks.filter(task => task.id===id)[0];
        task.done=!task.done;
    },
    deleteTask(state,id){
        state.tasks = state.tasks.filter(task => task.id!==id);

    }

  },
  actions: {
  },
  modules: {
  }
})
