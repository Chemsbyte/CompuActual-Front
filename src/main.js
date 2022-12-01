import { createApp } from 'vue'
import App from './App.vue'
// router
import router from './router'
// libs UI
import PrimeVue from 'primevue/config';
import { createVuestic } from 'vuestic-ui'
//styles libs UI
import './style.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css '//theme
import 'primevue/resources/primevue.min.css'//core css
import 'primeicons/primeicons.css'//icons
import 'vuestic-ui/css'
//Components PrimeVUE
import Card from 'primevue/card';
import Button from 'primevue/button';
import Chip from 'primevue/chip';
import Paginator from 'primevue/paginator';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';

const app = createApp(App);

app.use(PrimeVue)
app.use(createVuestic())
app.use(router)

app.component('Card', Card)
app.component('Dialog', Dialog)
app.component('Button', Button)
app.component('Chip', Chip)
app.component('Paginator', Paginator)
app.component('InputText', InputText)
app.component('Menubar', Menubar)

app.mount('#app')
