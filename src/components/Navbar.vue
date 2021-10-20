<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul class="container">
            <router-link to="/" class="navbar-brand">
            <img src="@/assets/logo.png" id="logo">
            VueJS</router-link>
            <div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Tasks</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/tasks/new" class="nav-link">Create task</router-link>
                    </li>
                </ul>
            </div>
        </ul>
    </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Navbar'
})
</script>
<style>
#logo {
    width: 3rem;
}
</style>
