<template>
    <div class="nav">
        <transition name="fade">
        <div class="small-cover" v-show="isShow"></div>
        </transition>

        <div class="big-cover" v-show="isShow" @click="hideAppNav()"></div>

        <transition name="slide">
        <ul class="tabbars" v-show="isShow">
            <li v-for="(tabItem,index) in navList" :key="index" @click="navAction(tabItem.path)">{{tabItem.title}} <i class="icon-youjiantou arrow-right iconfont"></i></li>
        </ul>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return{
            navList:[
                {title:"首页",path:"/home"},
                {title:"影片",path:"/films"},
                {title:"影院",path:"/cinemas"},
                {title:"商城",path:"/shop"},
                {title:"我的",path:"/mine"},
                {title:"卖座卡",path:"/card"}
            ],
            isShow:false
        }
    },
    methods:{
        hideAppNav(){
            this.isShow=false;
        },
        navAction(path){
            this.$router.push(path);
            this.isShow = false;
        }
    },
    created(){
        this.$center.$on("show-appnav",()=>{
            console.log(111)
            this.isShow = true;
        })
    }
}
</script>

<style scoped>
.small-cover{
    width:100%;
    position: absolute;
    top:50px;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5)
}
.big-cover{
    width:100%;
    height: 100%;
    position: absolute;
    left: 0;
    top:0;
    background: transparent;
}
.tabbars{
    width:70%;
    position: absolute;
    left: 0;
    top:50px;
    bottom: 0;
    background: #282828;
}
.tabbars li{
    height: 50px;
    line-height: 50px;
    padding:0 16px;
    font-size: 14px;
    color: #9a9a9a;
}
.arrow-right{
    float: right;
    font-size: 12px;
}

@keyframes fadeIn {
    0%{opacity: 0;}
    100%{opacity: 1;}
}

@keyframes fadeOut {
    0%{opacity: 1;}
    100%{opacity: 0;}
}
.fade-enter-active{
    animation: fadeIn 200ms;
}
.fade-leave-active{
    animation: fadeOut 200ms;
}
@keyframes slideIn {
    0%{transform: translateX(-100%)}
    100%{transform: translateX(0)}
}
@keyframes slideOut {
    0%{transform: translateX(0)}
    100%{transform: translateX(-100%)}
}
.slide-enter-actvie{
    animation: slideIn 200ms;
}
.slide-leave-active{
    animation: slideOut 200ms;
}
</style>
