<template>
    <div v-show="show">
        <div class="head_title_fa">{{banner_list.name}}</div>
        <el-carousel indicator-position="outside" height="41.04vw" class="banner_pager" arrow="never" @change="pagerFn">
            <el-carousel-item v-for="(item,index) in banner_list.list">
                <div class="banner_title">{{item.header}}</div>
                <div class="img_bg"><img :src=item.src></div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>

    export default {
        name: "View_pager",
        data(){
            return{
                title:'智慧环卫一体化管理云平台',
            }
        },
        methods:{
            pagerFn(e){
                // console.log(e)
                // if(e>0 && e<=3){
                //     this.title = '智慧环卫一体化管理云平台'
                // }else if(e>3){
                //     this.title = '发电房'
                // }
            }
        },
        computed:{
            banner_list:function(){
                return this.$store.state.content_list;
            },
            show:function () {
                return !this.$store.state.main_show;
            }
        },
    }
</script>

<style scoped lang="scss">
    .head_title_fa{
        font-size: 2.08vw;
        position: absolute;
        left: 50%;
        color: #ffffff;
        top: 8.02vw;
        font-weight: bold;
        transform: translateX(-50%);
    }

    .banner_pager{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 11.61vw;
        width: 86.97vw;
        /*height: 41.04vw;*/
        .banner_title{
            width: 100%;
            height: 5.36vw;
            font-size: 1.3vw;
            line-height: 5.36vw;
            text-align: center;
            color: #ffffff;
            z-index: 2;
        }
        .img_bg{
            background-color: #ffffff;
            width: 80.62vw;
            height: 33.59vw;
            padding-top: 3.64vw;
            margin: 0 auto;
            img{
                width: 62.5vw;
            }
        }
    }
    /*.el-carousel__item h3 {*/
        /*color: #475669;*/
        /*font-size: 1;*/
        /*opacity: 0.75;*/
        /*line-height: 300px;*/
        /*margin: 0;*/
    /*}*/

    .el-carousel__item{
        background-color: rgba(0,0,0,0.8);
    }

</style>