<template>
    <div id="app">
        <button @click="add">点击</button>
        <p>{{num}}</p>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    name:'app',
    methods:{
        ...mapMutations(['add']),
    },
    computed:{
    num(){
      let {count} = this.$store.state;
      return count < 10?'0'+ count:''+count
    }
  },
}
</script>
