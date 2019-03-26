import Vuex from 'vuex'
import Vue from "vue";
Vue.use( Vuex );

const store = new Vuex.Store({
    state:{
        main_show:true,
        label_show:true,
        header_show:true,

        view_pager_title:'智慧城管大数据',
        content_list:{
            name:'智慧城管及大数据',
            list:[{
                header:'顶层设计：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                src:require('../assets/image/main.png')
            },{
                header:'顶层设计：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                src:require('../assets/image/main.png')
            },{
                header:'顶层设计：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                src:require('../assets/image/main.png')
            },{
                header:'顶层设计：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                src:require('../assets/image/main.png')
            },{
                header:'顶层设计：“3+N”模式设计，建立服务决策、服务指挥、服务管理、服务公众的智慧城管架构',
                src:require('../assets/image/main.png')
            }]
        },
    },
    mutations:{
        itemTab:function(state,index){
            if(index == 1){
                state.main_show = true;
                state.header_show = true;
                state.label_show = true
            }else {
                state.main_show = false;
                state.header_show = false;
                state.label_show = false;
            }
        }
    }
    //待添加
});
export default store