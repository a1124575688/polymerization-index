<template>
    <div class="index_header_pt" v-show="show">
        <img :src=showLogo class="header_logo"  @dblclick="logo_tab">
        <div class="weather_box">
            <div>
                <div class="item_1">{{day}}</div>
                <div class="font_w">{{time}}</div>
            </div>
            <img src="../assets/image/nav_cloud.png" class="weather_log">
            <div>
                <div class="item_2">多云转晴</div>
                <div class="font_w">20°C</div>
            </div>
            <div>
                <div class="item_3">PM2.5</div>
                <div class="font_w">36</div>
            </div>
        </div>
        <div class="logo_tab" v-show="isLogo">
            <img :src="item.src" v-for="(item,index) in logo_list" class="header_logo" @click="logo_list_tab(index,item)" :class="{img_list_bg:isbg==index}">
                <!--<img src="../assets/image/nav_logo.png" class="header_logo" @click="logo_list_tab(1)" :class="{img_list_bg:isbg_1}" >-->
                <!--<img src="../assets/image/nav_logo.png" class="header_logo" @click="logo_list_tab(2)" :class="{img_list_bg:isbg_2}" >-->
                <!--<img src="../assets/image/nav_logo.png" class="header_logo" @click="logo_list_tab(3)" :class="{img_list_bg:isbg_3}" >-->
                <!--<img src="../assets/image/nav_logo.png" class="header_logo" @click="logo_list_tab(4)" :class="{img_list_bg:isbg_4}" >-->
                <!--<img src="../assets/image/nav_logo.png" class="header_logo" @click="logo_list_tab(5)" :class="{img_list_bg:isbg_5}" >-->
        </div>
    </div>
</template>

<script>
    let imgUrl = require('../assets/image/nav_logo.png');
    import imgTe  from '../assets/image/icon_1.png'
    export default {
        name: "Index_header_pt",
        data(){
            return{
                isbg:'',
                day:1,
                time:2,
                showLogo:imgUrl,
                logo_list:[{
                    src:imgUrl
                },{
                    src:imgTe
                },{
                    src:imgUrl
                },{
                    src:imgUrl
                },{
                    src:imgUrl
                }],
                isLogo:false,
            }
        },
        created() {
            this.day = this.getNowFormatDate();
            this.time = this.getTime();
            if(localStorage.getItem('nowSrc')){
                this.showLogo = localStorage.getItem('nowSrc')
            }
            if(localStorage.getItem('nowSrcIndex')){
                this.isbg = localStorage.getItem('nowSrcIndex')
            }
        },
        computed:{
            show:function () {
                return this.$store.state.header_show;
            }
        },
        methods:{
            getNowFormatDate() {
                var date = new Date();
                var seperator1 = "-";
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                var currentdate = year + seperator1 + month + seperator1 + strDate;
                return currentdate;
    },
            getTime(){
                let nowDate = new Date();
                return nowDate.getHours() + ':'+nowDate.getMinutes()
            },
            logo_tab(){
                this.isLogo = !this.isLogo
            },
            logo_list_tab(i,item){
                localStorage.setItem('nowSrc',item.src);
                localStorage.setItem('nowSrcIndex',i);
                this.isLogo = false;
                this.showLogo = item.src;
                this.isbg = i;
            }
        }
    }
</script>

<style scoped lang="scss">
    .img_list_bg{
        background-color: #5B6CB5;
    }
    .index_header_pt{
        display: flex;
        position: absolute;
        width: 100%;
        height: 4.1vw;
        justify-content:space-between;
        .header_logo{
            width: 4.1vw;
            height: 4.1vw;
            z-index: 2;
            cursor: pointer;
        }
        .logo_tab{
            display: flex;
            flex-wrap:wrap;
            width: 15.66vw;
            height: 11.45vw;
            position: absolute;
            left: 3.12vw;
            top: 3.12vw;
            background-color: rgba(12,18,45,0.7);
            border: 1px solid #DBDBDB;
            padding-left: 1vw;
            padding-top: 1vw;
            border-radius: 0.52vw;
            .logo_click{
                width: 4.68vw;
                height: 4.68vw;
                cursor: pointer;
                z-index: 2;
                .header_logo{
                    background-color: red;
                }
            }
        }
        .weather_box div{
            margin-right: 1.2vw;
        }
        .weather_box{
            padding-top: 1vw;
            color: #ffffff;
            display: flex;
            .weather_log{
                width: 3.02vw;
                height: 1.87vw;
            }
            .item_1,.item_3,.item_2{
                font-size: 0.72vw;
            }
            .font_w{
                font-weight: bold;
                font-size: 1.09vw;
            }
        }
    }


</style>