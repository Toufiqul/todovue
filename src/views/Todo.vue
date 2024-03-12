<template>
  <div class="home">
    <field-add-task />
    <list-tasks v-if="$store.state.tasks.length" />
    <no-tasks v-else/>
  </div>
</template>

<script>
import FieldAddTask from "@/components/Todo/FieldAddTask.vue";

export default {
  name: "Todo",
  components: {
    "field-add-task": FieldAddTask,
    "list-tasks": require("@/components/Todo/ListTasks.vue").default,
    "no-tasks": require("@/components/Todo/NoTasks.vue").default
  },
};
</script>
