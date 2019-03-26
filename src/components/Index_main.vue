<template>
    <div class="main_box" v-show="show">
        <div class="main_box_1">
            <div @click="list_click(item,index)" :class="{click_style:isClick == index,'nav-item-ave':index > 2,bg_show:index == 1}" v-for="(item,index) in mainList">
                <span class="nav-item-img"><img :src=item.src class="img_size" :style="{width:item.size}"></span>
                <p class="nav-item-name">{{item.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index_main",
        data(){
            return{
                mainList:[
                    {
                    src:require('../assets/image/icon_1.png'),
                    name:'智慧执法云平台',
                        size:'5.72vw'
                },
                    {
                        src:require('../assets/image/icon_2.png'),
                        name:'大数据可视化分析研判平台',
                        size:'6.25vw'
                    },
                    {
                        src:require('../assets/image/icon_3.png'),
                        name:'智慧环卫云平台',
                        size:'5.2vw;'
                    },
                    {
                        src:require('../assets/image/icon_4.png'),
                        name:'智慧渣土',
                        size:'3.59vw'
                    },
                    {
                        src:require('../assets/image/icon_5.png'),
                        name:'AI视频智能监督',
                        size:'3.12vw'
                    },
                    {
                        src:require('../assets/image/icon_6.png'),
                        name:'数字城管',
                        size:'2.81vw'
                    },
                    {
                        src:require('../assets/image/icon_7.png'),
                        name:'公众服务',
                        size:'2.81vw'
                    },
                ],
                isClick:'',
                // show:this.$store.state.main_show
            }
        },
        methods:{
            list_click(item,index){
                this.isClick = index
            }
        },
        computed:{
            show:function () {
                return this.$store.state.main_show;
            }
        }
    }
</script>

<style scoped lang="scss">
    $flex:flex;
    .click_style{
        border: 0.26vw solid #DBDBDBFF !important;
        background-color: rgba(39,54,118,0.8) !important;
        box-shadow: 0 0 2vw #273676, 0 0 2vw #273676, 0 0 2vw #273676;
    }

    .main_box{
        width: 71.8vw;
        height: 28.5vw;
        position: absolute;
        left: 50%;
        top: 17.9vw;
        transform: translateX(-50%);
        .main_box_1{
            width: 74.11vw;
            height: 29.16vw;
           display: $flex;
            flex-wrap:wrap;
            justify-content:space-between;
            p{
                font-size:1.56vw;
                font-weight:bold;
                color:#fff;
                text-shadow:0 0 15px #0b599c, 0 0 30px #0b599c, 0 0 30px #0b599c, 0 0 60px #0b599c
            }
            .nav-item-ave{
                width: 17.6vw;
                height: 9.2vw;
                display: flex;
                flex-direction:unset;
            }
            .nav-item-ave img{
                margin-top: 1vw;
            }
            .bg_show{
                background: url("../assets/image/card_1_bg.png") !important;
                background-size: 100% 100%;
            }

        }

        .main_box_1 > div{
            display:$flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border: 2px solid #DBDBDBFF;
            border-radius: 20px;
            background: url("../assets/image/bg_pix.png");
            background-color: rgba(12,18,45,0.8);
            cursor: pointer;
            p{
                margin-top:1.04vw;
            }
        }
        .main_box_1 div:first-child{
            width: 17.6vw;
            height: 18.2vw;
        }
        .main_box_1 div:nth-child(2){
            width: 36.6vw;
            height: 18.2vw;
        }
        .main_box_1 div:nth-child(3){
            width: 17.6vw;
            height: 18.2vw;
        }

    }
</style>