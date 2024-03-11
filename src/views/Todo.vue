<template>
    <div class = "home">
        <v-text-field
        v-model="newTaskTitle"
        @click:append="addTasks"
        @keyup.enter="addTasks"
        class = "pa-3"
            outlined
            label="Add Task"
            append-icon="mdi-plus"
            hide-details
            clearable
          ></v-text-field>
          
          <v-list
          v-if = "$store.state.tasks.length"
          class = "pt-0"
          flat>
          
          <div
          v-for = "task in $store.state.tasks":key="task.id"
>
          <v-list-item
        @click="$store.commit('doneTask',task.id)"
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
          @click.stop="$store.commit('deleteTask',task.id)" 
          icon>
            <v-icon color="primary lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
            </template>
        </v-list-item>

        <v-divider></v-divider>
    </div>
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
    methods:{
        addTasks(){
            this.$store.commit('addTask',this.newTaskTitle)
            this.newTaskTitle = ""
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