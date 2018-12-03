<template>
    <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in data" :key="item.id">
            <img :src="item.imageUrl" >
        </div>
    </div>
  
</div>
</template>

<script>
export default {
    props:{
        data:Array
    },
    mounted(){
        this.mySwiper = new Swiper(this.$refs.swiper,{
            loop:true,
            autoplay:2000
        })
    },
    updated(){
        this.mySwiper.update();
        this.mySwiper.reLoop()
    }
}
</script>

<style scoped>
.swiper-slide img{
    width:100%;
}
</style>
