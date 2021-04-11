<template>
<div>
    <h1>Hi, I am Ken.</h1>
    <!-- <router-link to="/ken/mock">Mock</router-link> | 
    <router-link to="/ken/YTB">YouTube</router-link> -->
    <router-link :to="{name:'Mock'}">Mock</router-link> | 
    <router-link :to="{name:'YTB'}">YouTube</router-link>
    <div>
        <router-view/>
    </div>
</div>
</template>