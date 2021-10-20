<template>
    <div class="col-md-4 offset-md-4">
        <form @submit.prevent="saveTask()" class="card card-body">
            <h1 class="text-center h3 mb-3">Nueva tarea</h1>
            <input 
                autofocus
                type="text" 
                placeholder="Título" 
                v-model="task.title"
                class="form-control mb-3">
            <textarea 
                rows="3" 
                placeholder="Descripción" 
                v-model="task.description"
                class="form-control mb-3"></textarea>
            <button 
            class="btn btn-primary btn-sm"
            :disabled="!task.title || task.description">Guardar</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Task } from '@/interfaces/Task';
import { createTask } from '../services/TaskService';

export default defineComponent({

    // Define las variables globales del componente
    data() {
        return {
            task: {} as Task
        }
    },
    methods: {
        async saveTask() {
            const res = await createTask(this.task);
            console.log(res)
            this.$router.push('/tasks') // como el navigate de angular
        }
    }

});
</script>
