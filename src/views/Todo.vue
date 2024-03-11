<template>
    <div class = "home">
        <div
        v-for = "task in tasks":key="task.id"
>
    <v-list
    class = "pt-0"
      flat>

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
            </template>
        </v-list-item>

    </v-list>
<v-divider></v-divider>
</div>
</div>
</template>

<script>
  export default {
    name: 'Todo',
    data(){
        return{
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
        }
    },
    methods:{
        doneTask(id){
            // let task = this.tasks[id-1];
            // task.done=!task.done;
            // console.log(task);

            let task = this.tasks.filter(task => task.id===id)[0];
            task.done=!task.done;
        }
    }

  }
</script>
