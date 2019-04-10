<template>
  <div>
        <section class="todoapp">
            <div>
                <myheader></myheader>
                <section class="main">
                  <input class="toggle-all" type="checkbox" :checked="all" @click="changell">
                  <List :aa="newArr" @delefn="deleFn" @pdb="parentDB" @cval="cval"></List>
                </section>
                <MFooter :num="num" @cafn="caFn"></MFooter>
            </div>
        </section>
    </div>
</template>
<script>
import Myheader from './components/myheader'
import List from './components/List'
import MFooter from './components/footer'
import './assets/css/index.css';
export default {
  name: 'app',
  data(){
    return{
      arr:[
        {id:0,checked:false,txt:'哈哈',deiting:false},
        {id:1,checked:false,txt:'呵呵',deiting:false},
      ],
      checkedall:'all'
    }
  },
  components: {
    Myheader,
    List,
    MFooter
  },
  methods:{
    //添加数据
    addarr(newData){
      this.arr.unshift(newData)
    },
    //header的全选
    changall(ev){
      this.arr.forEach(e=>{
        e.checked = ev.target.checked
      })
    },
    //删除每一个input里面的数据txt
    deleFn(id){
      this.arr = this.arr.filter(e=>e.id!=id)
    },
    //状态筛选(未完成,已完成)
    
  },
}
</script>