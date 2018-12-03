<template>
    <div class="film-item">
        <img :src="data.cover">
        <div class="footer">
            <h3 class="title">{{data.name}}</h3>
            <p v-if="type=='now-palying'" class="introduce">{{data.cinemaCount}}家影院上映&nbsp;{{data.watchCount}}人购票</p>
            <p v-if="type=='now-palying'" class="grade">{{data.grade}}</p>
            <p v-if="type=='coming-soon'" class="date">{{data.premiereAt | formatDate}}上映</p>
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
    margin:17px 17px 0 ;
}
.film-item img{
    width: 100%;
    display: block;
}
.footer{
    padding: 13px 15px 10px 11px;
    background: #fff;
    position: relative;
}
.title{
    color:#333;
    font-size: 14px;
    font-weight: normal;
}
.introduce{
    color:#9a9a9a;
}
.grade, .date{
    position: absolute;
    right: 15px;
    top:50%;
    transform: translateY(-50%);
    color: #f78360;
    
}
.grade{
    font-size: 18px;
}
</style>
