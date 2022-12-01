<template>
    <div>
        <Menubar :model="items">
            <template #start>
               <h1>CompuActual</h1>
            </template>
            <template #end>
               <i class="pi pi-fw pi-power-off"></i>
            </template>
           
        </Menubar>
      
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label:'Servicios',
                    icon:'pi pi-fw pi-file',
                    items:[
                        {
                            label:'Nuevo',
                            icon:'pi pi-fw pi-plus',
                        },
                        {
                            label:'Ver todos',
                            icon:'pi pi-fw pi-eye'
                        },
                        {
                            label:'Export',
                            icon:'pi pi-fw pi-external-link'
                        }
                    ]
                },
                {
                    label:'Clientes',
                    icon:'pi pi-fw pi-user',
                    items:[
                        {
                            label:'Agregar',
                            icon:'pi pi-fw pi-user-plus'
                        },
                        {
                            label:'Ver Clientes',
                            icon:'pi pi-fw pi-users'
                        },
                    ]
                },
                {
                    label:'Personal',
                    icon:'pi pi-fw pi-user',
                    items:[
                        {
                            label:'Agregar',
                            icon:'pi pi-fw pi-user-plus',

                        },
                        {
                            label:'Ver Personal',
                            icon:'pi pi-fw pi-users',

                        },
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
img {
    background-color: transparent !important;
}
</style>