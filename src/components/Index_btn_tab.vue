<template>
    <div class="index_btn">
        <div class="item_pt" @click="itemTab(1)" :class="{click_item:isClick1}">
            <i class="xb_icon window-maximize-re"></i>
            <span>平台</span>
        </div>
        <div class="item_fa" @click="itemTab(2)" :class="{click_item:isClick2}">
            <i class="xb_icon th-large"></i>
            <span>方案</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index_btn_tab",
        data(){
            return{
                isClick1:true,
                isClick2:false,
            }
        },
        methods:{
            itemTab(i){
                this.$store.commit('itemTab',i);

                if(i == 1){
                        this.isClick1 = true;
                        this.isClick2 = false
                }else {
                        this.isClick1 = false;
                        this.isClick2 = true
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .click_item{
        box-shadow: 0 0 1vw #273676 inset, 0 0 1vw #273676 inset, 0 0 1vw #273676 inset;
        background-color: rgba(39, 54, 118, 0.8) !important;
    }

    .index_btn{
        position: absolute;
        right: 1vw;
        bottom: 0;
        display: flex;
        .item_pt,.item_fa{
            border: 1px solid #DBDBDB;
            cursor: pointer;
            line-height: 1.97vw;
            width: 4.79vw;
            height: 1.97vw;
            color: #ffffff;
            font-size: 0.93vw;
            background: url("../assets/image/bg_pix.png");
            background-color: rgba(12,18,45,0.8);
            border-radius: 0.2vw;
            margin-right: 0.7vw;
            i{
                font-size: 0.93vw;
                margin-right: 0.4vw;
            }
        }
    }
</style>