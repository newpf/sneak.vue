<template>
    <header class="header">
        <h1>todos</h1>
        <input  class="new-todo" 
                placeholder="请输入内容" 
                @keyup.13="add" ref="el"
                >
    </header>
</template>


<script>
export default {
    name:'Myheader',
    props:['addarr'],
    methods:{
        add(ev){

            //ref = "el" 通过加ref定位元素通过this.$refs.el 去获取元素
            let {value:txt} = ev.target;
            this.$emit('addarr',{
                id:+new Date,
                txt,
                checked:false
            });
            //输入框点击回车,内容为空
            ev.target.value = '';
        }
    }
}
</script>