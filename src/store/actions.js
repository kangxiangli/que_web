//提交的是 mutations，而不是直接变更状态。也就是说，actions会通过mutations，让mutations帮他提交数据的变更。
export default {
    // 小写
    initmusicmes({commit}, value) {
        console.log(value)
        commit('INITMUSICMES', value);
    },
    add:function(context,value){
        setTimeout(function(){
　　　　　　　　　　　//提交事件
           context.commit('changeAsync',value);
        },1000)
    },
    updateLoginIsShow:function(context,value){
        setTimeout(function(){
            //提交事件
            context.commit('refreshStatu',value);
        },1000)
    }
}