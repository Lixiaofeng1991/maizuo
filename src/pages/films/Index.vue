<template>
    <page id="films" ref="page">
        <nav class="nav">
            <li :class="{active:isShow == navItem.type}" v-for="(navItem,index) in navList" :key="index" @click="showAction(navItem.type)">{{navItem.title}}</li>
        </nav>
        <keep-alive>
            <div v-if="isShow == 'playing'">
                <file-item v-for="playingItem in nowPlayingData" :key="playingItem.id" :data="playingItem" type="playing"></file-item>
            </div>

            <div v-else-if="isShow =='coming'">
                <file-item v-for="comingItem in comingSoonData" :key="comingItem.id" :data="comingItem" type="coming"></file-item>
            </div>
        </keep-alive>
    </page>
</template>

<script>
import {getNowPlayingData,getComingSoonData} from "@/services/filmServices.js"
import FileItem from "@/components/films/index/FilmItem"

export default {
    components:{
        FileItem
    },
    data(){
        return{
            isShow:"",
            navList:[{title:"正在热映",type:"playing"},{title:"即将上映",type:"coming"}],
            //正在热映的数据
            nowPlayingData:[],
            //即将上映的数据
            comingSoonData:[],
            
            isLoadingPlaying:true,
            playingPage:1,
            playingCount:7,
            isLoadingComing:true,
            comingPage:1,
            comingCount:7,

        }
    },
    methods:{
        showAction(flag){
            this.isShow = flag;
        },
        requestNowPlayingData(){
            getNowPlayingData(this.playingPage,this.playingCount)
            .then(({data,total})=>{
                this.nowPlayingData=this.nowPlayingData.concat(data);
                this.$nextTick(()=>{
                     this.$refs.page.myScroll.refresh();
                     console.log(total)
                     if(this.playingPage<total){
                          this.playingPage++;
                          this.isLoadingPlaying = true;
                     }
                    
                })
                
            })
        },
        requestComingSoonData(){
            getComingSoonData(this.comingPage,this.comingCount)
            .then(({data,total})=>{
              this.comingSoonData = this.comingSoonData.concat(data);
              this.$nextTick(()=>{
                     this.$refs.page.myScroll.refresh();
                     console.log(total)
                     if(this.comingPage<total){
                          this.comingPage++;
                          this.isLoadingComing = true;
                     }
              })
            })
        }
    },
    watch:{
        isShow(){
            console.log("变化了")
            if(this.isShow=="playing" && this.nowPlayingData.length<=0){
                this.requestNowPlayingData();
            }else if(this.isShow=="coming" && this.comingSoonData.length<=0){
                this.requestComingSoonData();
            }
        }
    },
    mounted(){
        this.isShow = this.$route.query.flag ? this.$route.query.flag : "playing";
        const myScroll =  this.$refs.page.myScroll;
        myScroll.options.probeType = 3;
        myScroll.on("scroll",()=>{
            let disY = myScroll.y - myScroll.maxScrollY;
            if(disY<100 && this.isLoadingPlaying && this.isShow =="playing"){
                console.log(111)
                this.isLoadingPlaying = false;
                this.requestNowPlayingData();
            }
             if(disY<100 && this.isLoadingComing && this.isShow =="coming"){
                console.log(disY,2222)
                this.isLoadingComing = false;
                this.requestComingSoonData();
            }
        })
    }
}
</script>

<style scoped>
#films{
    padding:0 15px;
    background: #f9f9f9;
    box-sizing: border-box;
}
.nav{
    display: flex;
    border-bottom:1px solid #fe6e00 
   
}
.nav li{
    flex:1;
     height: 45px;
     line-height: 45px;
     box-sizing: border-box;
     text-align: center;
     font-size: 16px;
     color: #6a6a6a;
}
.nav li.active{
    color:#fe6e00;
    border-bottom: 3px solid #fe6e00;
}
</style>
