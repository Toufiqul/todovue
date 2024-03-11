<template>
    <div class = "home">
        <v-text-field
        v-model="newTaskTitle"
        @click:append="addTask"
        @keyup.enter="addTask"
        class = "pa-3"
            outlined
            label="Add Task"
            append-icon="mdi-plus"
            hide-details
            clearable
          ></v-text-field>
          
          <v-list
          v-if = "tasks.length"
          class = "pt-0"
          flat>
          
          <div
          v-for = "task in tasks":key="task.id"
>
          <v-list-item
        @click="doneTask(task.id)"
        :class="{'green lighten-4':task.done}"
        >
            <template v-slot:default>
            <v-list-item-action>
                <v-checkbox :input-value="task.done"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
                <v-list-item-title
                :class="{'text-decoration-line-through':task.done}">{{task.title}}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
          <v-btn 
          @click.stop="deleteTask(task.id)" 
          icon>
            <v-icon color="primary lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
            </template>
        </v-list-item>

    </div>
    <v-divider></v-divider>
    </v-list>

    <div
    class="noTasks"
    v-else
    >
    <v-icon
    size="100"
    color = "primary"
    >mdi-check-all</v-icon>
    <div class="text-h5 primary--text">Hurray, no tasks</div>
    </div>
</div>
</template>

<script>
  export default {
    name: 'Todo',
    newTaskTitle:"",
    data(){
        return{
            tasks: [
                // {
                //     id: 1,
                //     title: 'Task 1',
                //     done: false
                // },
                // {
                //     id: 2,
                //     title: 'Task 2',
                //     done: false
                // },
                // {
                //     id: 3,
                //     title: 'Task 3',
                //     done: false
                // }
            ]
        }
    },
    methods:{
        doneTask(id){
            // let task = this.tasks[id-1];
            // task.done=!task.done;
            // console.log(task);

            let task = this.tasks.filter(task => task.id===id)[0];
            task.done=!task.done;
        },
        deleteTask(id){
            this.tasks = this.tasks.filter(task => task.id!==id);

        },
        addTask(){
            let newTask ={id:Date.now(),
            title: this.newTaskTitle,
            done: false
            }
            this.tasks.push(newTask);
            this.newTaskTitle="";
        }
    }

  }
</script>

<style lang="sass">
.noTasks
    position: absolute
    left:50%
    top:50%
    transform: translate(-50%,-50%)
    opacity: 80%
</style>