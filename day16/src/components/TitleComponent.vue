<template>
    <h1>{{title}}</h1>
</template>

<script>
export default {
    name:'titleComponent',
    // data(){
    //     return {
    //         titleComponent:"Hello Ken"
    //     }
    // }
    props:{
        title:{
            type:String,
            required:true
        }
    }
}
</script>

<style scoped>
h1{
    color:orange
}
</style>
