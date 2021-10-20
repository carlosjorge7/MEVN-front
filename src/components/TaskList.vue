<template>
    <h1 class="text-center h3 mb-3">Todas las tareas</h1>
    <ul class="list-group p-5">
        <li
            class="list-group-item list-group-item-action"
            v-for="(task, index) in tasks" :key="index" 
            @click="this.$router.push(`/tasks/${task._id}`)"
        >
        {{ index+1 }}.
        {{ task.title }}
        {{ task.description }}
        </li>
    </ul>  
</template>

<script lang="ts">
import { Task } from '@/interfaces/Task';
import { getTasks } from '@/services/TaskService'
import { defineComponent } from 'vue'

export default defineComponent({
    // Define las variables del componente
    data() {
        return {
            tasks: [] as Task[]
        }
    },
    methods: {
        async getTasks() {
            const res = await getTasks();
            this.tasks = res.data;
            console.log(this.tasks)
        }
    },
    mounted() { // ngOnInit
        this.getTasks()
    }
})
</script>
