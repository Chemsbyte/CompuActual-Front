<template>
    <NavbarComponent></NavbarComponent>
    <div class="cards-section">
        <CardComponent
        v-for="{title} in cards"
        :title = "title"
        ></CardComponent>
    </div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import CardComponent from '../components/CardComponent.vue'
   export default {
    components: {
        NavbarComponent,
        CardComponent
    },
    data(){
        return{
            cards: [
                {title:"Agregar Servicio"},
                {title:"Ver Servicios"},
                {title:"Ver personal"},
            ]
        }
    }
   }
</script>

<style>
    .cards-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin: 1rem;
    }
</style>