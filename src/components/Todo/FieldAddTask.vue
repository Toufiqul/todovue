<template>
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

</template>

<script>
export default {
    data(){
        return{
            newTaskTitle:""
        }
    },
    methods:{
        addTasks(){
            this.$store.commit('addTask',this.newTaskTitle)
            this.newTaskTitle = ""
        }
    },

}
</script>

<style>

</style>