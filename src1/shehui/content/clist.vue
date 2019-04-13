<template>
        <ul id="rightList">	
            <router-link 
                tag="li"  
                v-for="(val,key) in arr"
                :to="{path:`/detail/${key}`}"
            >
                    <span class="num">01</span>
                    <div class="list">
                        <a href="">
                            <span class="job">
                                {{val.zw}}
                            </span>
                            <span>需求人数：{{val.rs}}名</span>
                            <time>2014-04-10</time>
                        </a>
                        <p><span class="text">岗位要求：布拉布拉布拉一大段话布拉布拉布拉一大段话布拉布拉布拉一大段话</span><a href="javascript:;">查看详情>></a></p>
                    </div>
            </router-link>
        </ul>
</template>

<script>
    export default {
        name:"Clist",
        props:['arr']
    }
</script>

<style>

</style>