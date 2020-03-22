<template>
    <div :style="{position:'relative',fontSize:size+'px',color:'#FF7A3E'}">
    <div style="position:absolute; left:0;top:0;">
        <span class=" iconfont icon-star-empty" aria-hidden="true"></span>
        <span class=" iconfont icon-star-empty" aria-hidden="true"></span>
        <span class=" iconfont icon-star-empty" aria-hidden="true"></span>
        <span class=" iconfont icon-star-empty" aria-hidden="true"></span>
        <span class=" iconfont icon-star-empty" aria-hidden="true"></span>
    </div>
    <div :style="{position:'absolute', left:0,top:0,width: myWidth +'px', overflow: 'hidden',textOverflow: 'clip',whiteSpace: 'nowrap'}">
        <span class=" iconfont icon-star-full" aria-hidden="true"></span>
        <span class=" iconfont icon-star-full" aria-hidden="true"></span>
        <span class=" iconfont icon-star-full" aria-hidden="true"></span>
        <span class=" iconfont icon-star-full" aria-hidden="true"></span>
        <span class=" iconfont icon-star-full" aria-hidden="true"></span>
    </div>
</div>
</template>

<script>
export default {
    name:"StarRemark",
    props:['score','size'],
    data(){
        return{
           position:'relative',
           color:"#FF7A3E"
        }
    },
    computed:{
        myWidth:function(){
            var _score = this.score;
            if(this.score >5){
                _score = 5
            }
            if(this.score < 0){
                _score = 0
            }
            return _score*this.size;
        }
    }
}
</script>