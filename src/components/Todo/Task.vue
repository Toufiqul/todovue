<template>
  <div>
    <v-list-item
      @click="$store.dispatch('doneTask', task.id)"
      :class="{ 'green lighten-4': task.done }"
      class="white"
      :ripple="false"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox :input-value="task.done"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.done }"
            >{{ task.title }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text>
            <v-icon small>mdi-calendar</v-icon>
             {{ task.dueDate | niceDate }} <!-- the | character is used for applying filters to values. Filters are simple functions that take the value on the left as input and return a transformed value -->
          </v-list-item-action-text>
        </v-list-item-action>

        <v-list-item-action>
          <task-menu :task="task" />
        </v-list-item-action>

        <v-list-item-action>
            <v-btn color="primary" icon v-if="$store.state.sorting" class="handle" >
          <v-icon>mdi-drag-horizontal-variant</v-icon>
        </v-btn>
        </v-list-item-action>

      </template>
    </v-list-item>

    <v-divider></v-divider>
  </div>
</template>

<script>
import {format} from 'date-fns'
export default {
  props: ["task"],
  filters:{
    niceDate(value){
        return format(new Date(value), 'MMM d')
    }
  },
  //   created() {
  //     console.log(this.task.id);
  //   },
  components: {
    "task-menu": require("@/components/Todo/TaskMenu.vue").default,
  },
};
</script>


<style lang="sass">
.sortable-ghost
    opacity:0

.sortable-drag
    box-shadow: 0 0 10px rgba(0,0,0,0.3)
</style>