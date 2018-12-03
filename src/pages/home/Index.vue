<template>
    <page id="home" >
        <!-- 轮播图 -->
        <banner :data="bannerData"></banner>

        <!-- 正在热映 -->
        <div>
            <film-card v-for="item in nowPlayingData" :key="item.id" :data="item" type="now-palying"></film-card>
            <p class="more" @click="goFilmsAction('playing')">更多热映电影</p>
        </div>

        <!-- 即将上映 -->
        <div class="coming-soon">
            <div class="coming-soon-header">
                <p class="line"></p>
                <h3 class="title">即将上映</h3>
            </div>
            <film-card v-for="item in comingSoonData" :key="item.id" :data="item" type="coming-soon"></film-card>
             <p class="more" @click="goFilmsAction('coming')">更多即将上映电影</p>
        </div>
    </page>
</template>

<script>
import Banner from "@/components/home/index/Banner.vue"
import FilmCard from "@/components/home/index/FilmCard"
import {getBannerData,getNowPlayingData,getComingSoonData} from "@/services/filmServices"
export default {
    components:{
        Banner,
        FilmCard
    },
    data(){
        return{
            bannerData:[],
            nowPlayingData:[],
            comingSoonData:[]
        }
    },
    methods:{
        goFilmsAction(flag){
            this.$router.push({path:"/films",query:{flag}})
        }
    },
    created(){
        //请求轮播图数据
        getBannerData()
        .then(data=>{
            this.bannerData = data;
        })
        
        //请求正在热映数据
        getNowPlayingData(1,5)
        .then(({data})=>{
            this.nowPlayingData = data;
        })

        //请求即将上映数据
        getComingSoonData(1,3)
        .then(({data})=>{
            this.comingSoonData = data;
        })

    }
}
</script>

<style scoped>

.more{
    width:160px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color:#616161;
    margin:17px  auto 30px;
    border: 1px solid #aaa;
    border-radius:15px;
    font-size: 12px;
}
.coming-soon{
    padding-bottom: 1px;
}
.coming-soon-header{
    position: relative;
    padding-bottom: 30px;
}
.line{
    width:100%;
    height: 1px;
    background: #a8a8a8;
    position: absolute;
    left: 0;
    top:9px;
}
.title{
    position: relative;
    width: 65px;
    height: 20px;
    line-height: 20px;
    color:#eee;
    background: #a7a7a7;
    border-radius: 5px;
    margin: 0 auto;
    text-align: center;
    font-size: 12px;
    font-weight: normal;
}
</style>
