<template>
    <div class="col-md-4 offset-md-4">
        <form @submit.prevent="updateTask()" class="card card-body"> <!--prevent evita el refresh de la pagina e.target.prevent-->
            <h1 class="text-center h3 mb-3">Detalle tarea</h1>
            <input 
                type="text" 
                v-model="currentTask.title"
                class="form-control mb-3">
            <textarea 
                rows="3" 
                v-model="currentTask.description"
                class="form-control mb-3"></textarea>

            <button class="btn btn-primary">Actualizar</button><br>
        </form>
        <br>
        <div class="text-center">
             <button @click="deleteTask()" class="btn btn-danger">Borrar</button>
        </div>
    </div>
    <!-- Nota:_ el update no necesita funcion en el click, por que se la da el formulario por ello el boton de update esta dentro
    El boton de Delete va necesitar una funcion dentro, por que no pertenece al evento submit, por ello tendra la prodiedad click-->
</template>

<script lang="ts">
import { Task } from '@/interfaces/Task';
import { getTask, updateTask, deleteTask } from '@/services/TaskService'
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            currentTask: {} as Task,
            idTask: '' as string
        }
    },
    methods: {
        async getTask(id: string) {
            const res = await getTask(id);
            this.currentTask = res.data;
            console.log(this.currentTask);
        },
        async updateTask() {
            const res = await updateTask(this.idTask, this.currentTask);
            console.log(res);
            this.$router.push('/tasks')
        },
        async deleteTask() {
            const res = await deleteTask(this.idTask);
            console.log(res);
            this.$router.push('/tasks')
        }
    },
    mounted() {
        if(typeof this.$route.params.id == 'string'){
            this.idTask = this.$route.params.id // Como el activatedRoute de angular
            this.getTask(this.idTask);
        }
    }
})
</script>
