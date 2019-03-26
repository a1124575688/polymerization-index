<template>
    <div class="index_header_fa" v-show="show">
        <div class="logo_box">
            <img src="../assets/image/nav_logo.png" class="header_logo">
            <div class="logo_title">智慧城管解决方案</div>
        </div>
        <div class="list_box">
            <div v-for="(item,index) in list_box" @click="selected(item,index)" :class="{click_tab: activeName == index}">{{item.nav_name}}</div>
        </div>
    </div>
</template>

<script>
    import bannerSrc_1 from '../assets/image/main.png'
    export default {
        name: "Index_header_fa",
        data(){
            return{
                activeName: '',
                list_box:[{
                    name:'智慧城管大数据',
                    nav_name:'智慧城管及大数据',
                    node_1:5,
                    list:[{
                        header:'顶层设计：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    },{
                        header:'顶层设计：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    },{
                        header:'顶层设计：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    },{
                        header:'顶层设计：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    },{
                        header:'顶层设计：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    }]
                },{
                    name:'智慧环卫一体化管理云平台',
                    nav_name:'智慧环卫',
                    list:[{
                        header:'123：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    },{
                        header:'321：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    },{
                        header:'321：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    },{
                        header:'213：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    },{
                        header:'顶层213设计：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    }]
                },{
                    name:'智慧执法管理云平台',
                    nav_name:'智慧执法',
                    list:[{
                        header:'执法：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    },{
                        header:'执法：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    },{
                        header:'执法：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    },{
                        header:'执法：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    },{
                        header:'执法：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    }]
                },{
                    name:'网格化城市管理',
                    nav_name:'网格化管理',
                    list:[{
                        header:'网格化管理：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    },{
                        header:'网格化管理：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    },{
                        header:'网格化管理：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    },{
                        header:'网格化管理：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    },{
                        header:'网格化管理：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                        src:bannerSrc_1
                    }]
                }]
            }
        },
        mounted(){
            // this.selected(this.list_box[0])
        },
        methods:{
            selected: function(item,index) {
                this.activeName = index;
                this.$store.state.content_list = item;
            }
        },
        computed:{
            show:function () {
                return !this.$store.state.header_show;
            }
        },
    }
</script>

<style scoped lang="scss">
    .click_tab{
        box-shadow: 0 0 1vw #273676 inset, 0 0 1vw #273676 inset, 0 0 1vw #273676 inset;
        background-color: rgba(39,54,118,0.8) !important;
        background: url("../assets/image/bg_pix.png");
    }

    .index_header_fa{
        position: absolute;
        top: 0;
        color: #ffffff;
        display: flex;
        font-weight: bold;
        width: 100%;
        height: 4.16vw;
        background-color: rgba(0,0,0,0.6);
        .header_logo{
            width: 4.1vw;
            height: 4.1vw;
        }
        .logo_box,.list_box{
            display: flex;
            height: 100%;
        }
        .logo_box{
            width: 24.06vw;
        }
        .list_box > div{
            cursor: pointer;
            width: 13.02vw;
            height: 100%;
            line-height: 4.16vw;
            text-align: center;
            border: 1px solid #5B6CB5;
            font-size: 1.25vw;
            z-index: 2;
        }
        .logo_title{
            font-size: 1.56vw;
            line-height:4.16vw;
        }
    }

</style>