import { createApp } from 'vue'
import App from './App.vue'

// importamos las rutas
import router from './routes';

// Importamos bootswatch
import 'bootswatch/dist/materia/bootstrap.min.css'

createApp(App)
    .use(router)
    .mount('#app')
