<template>
    <header class="header iconfont">
        <div class="menu" @click="showAppNav()"><i class="icon-caidan menu-icon"></i><h1 class="title">{{title}}</h1></div>
        <div class="city">{{city}}<i class="icon-xiajiantou arrow-down"></i></div>
        <i class="icon-wode mine-icon"></i>
    </header>
</template>

<script>
export default {
    data(){
        return{
            title:"卖座电影",
            city:"深圳"
        }
    },
    methods:{
        showAppNav(){
            this.$center.$emit("show-appnav");
        }
    }
}
</script>

<style scoped>
.header{
    width:100%;
    height: 50px;
    position: absolute;
    left: 0;
    top:0;
    background: #282828;
    color:#999;
    display:flex;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
}
.menu{
    flex: 1;
    display: flex;
}
.title{
    font-weight: normal;
    color: #efefef;
}
.city{
    width:50px;
}
.arrow-down{
    font-size: 18px;
}
.menu .menu-icon{
    width:50px;
}
.mine-icon{
    width: 50px;
    font-size: 20px;
}
</style>
