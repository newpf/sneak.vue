<template>
    <div id = "app">
        <router-link to="/" tag="button">首页</router-link>
        <router-link :to="{path:'/about',params:{id:321}}" tag="button">关于</router-link>
        <router-link to="/Bar/1" tag="button">Bar</router-link>
        <router-link to="/Bar/2" tag="button">Bar</router-link>
        <router-view></router-view>
    </div>
</template>
