<template>
    <div class="page" ref="scroll">
        <div class="scroll-container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        this.myScroll = new IScroll(this.$refs.scroll,{
            //  scrollbars: true
        });
        this.myScroll.on("beforeScrollStart",function(){
            this.refresh();
        })
    }
}
</script>

<style scoped>
.page{
  width:100%;
  position: absolute;
  left: 0;
  top:50px;
  bottom: 0;
  background: #ebebeb;
  overflow: hidden;
}
</style>
