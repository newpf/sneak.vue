<template>
    <ul class="todo-list">
        <li :class="dbclass(val.checked,val.editing)" v-for="(val,key) in aa">
            <div class="view">
                <input class="toggle" type="checkbox" v-model="val.checked">
                <label @dblclick="db(val.id,val.txt,$event)">{{val.txt}}</label>
                <button class="destroy" @click="dele(val.id)"></button>
            </div>
            <input  class="edit" 
                    v-model="parentVal"
                    @blur="blur(val.id,val.txt)" 
                    @keyup.13="blur(val.id,val.txt)">
        </li>
    </ul>
</template>


<script>
export default {
    name:'List',
    props:{
        aa:Array
    },
    
}
</script>