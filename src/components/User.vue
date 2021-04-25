<template>
    <div>
        <p>Name: {{name}}</p>
        <p>Email: {{email}}</p>
        <p>Phone: {{phone}}</p>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "User",
        //props: ['name', 'email','phone'] Regular props
        props: { //Props with validations
            name:String,
            email:String,
            phone:String
        }
    }
</script>

<style scoped>

</style>