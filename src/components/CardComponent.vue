<template>
    <div class="section">
        <div class="cardt shadow-sm">
            <h1 class="title">
                {{ title }}
            </h1>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Card Title'
        }
    }
}

</script>

<style lang="scss" scoped>
body{
    background-color: #ffffff;
}

    .cardt {
    margin: 1rem 25px;
    cursor: pointer;
    display: flex;
    background-color: #E3F5FF;;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    height: 100px;
    width: 200px;
    border-radius: 8px;

    
  
    }
    .section{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    
</style>