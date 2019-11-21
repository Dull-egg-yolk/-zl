// 跟前面一样 创建一个对象 里面放方法
var category = {
    // 显示数据
    // 后端 13接口
    show:function (callback) {
        $.get(PROT.category_show,function(res) {
            callback(res)
        }
           
        )
    }
}