<template>
    <div class="film-item">
        <div class="img">
            <img :src="data.poster" >
        </div>
        <div class="text">
            <h3 class="title">{{data.name}} <div class="grade">{{type=='playing' ? data.grade : ""}}<i class="iconfont icon-youjiantou arrow-right"></i></div></h3>
            <p class="intro">{{type=='playing'? data.intro : ""}}</p>
            <p class="count" v-if="type=='playing'">{{data.cinemaCount}}家影院上映<span class="watch-count">{{data.watchCount}}人购票</span></p>
            <p class="time" v-if="type=='coming'">{{data.premiereAt | formatDate}}上映<span class="week">{{data.premiereAt | formatDate("week")}}</span></p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        data:Object,
        type:String
    }
}
</script>

<style scoped>
.film-item{
    display: flex;
    padding: 20px 0;
    border-bottom: 1px dashed #c9c9c9;
}
.img{
    width:60px;
}
.img img{
    width: 100%;
}
.text{
    padding:0 20px 0 15px;
    flex: 1;
}
.title{
    height: 32px;
    line-height: 32px;
    font-size: 16px;
    color: #000;
    font-weight: normal;
}
.grade{
    float: right;
    color:#fc7103
}
.arrow-right{
    display: inline-block;
    font-size: 12px;
    color: #c6c6c6;
    transform: scale(0.8)
}
.intro,.count{
    height: 24px;
    line-height: 24px;
    color:#8e8e8e;
}
.watch-count{
    display: inline-block;
    margin-left: 30px;
}
.time{
    height: 24px;
    line-height: 24px;
    color:#ffb375;
}
.week{
    display: inline-block;
    margin-left: 16px;
}
</style>
