<script>
export default{
    name:'inputComponent',
    props:{
        text:{
            type:String,
            required:true,
            default:"這是預設"
        }
    },
    computed:{
        inputText:{
            get(){
                return this.text
            },
            set(val){
                //this.$emit('textChange',val) 若只是改值用這種寫法太冗餘
                this.$emit("update:text",val)
            }
        }
    }
}
</script>

<template src="./template.html">
    
</template>

<style scoped src="./style.css">

</style>