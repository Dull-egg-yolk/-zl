// 跟前面一样 创建一个对象 里面放方法
var category = {
    // 显示数据
    // 后端 13接口
    show:function (callback) {
        $.get(PROT.category_show,function(res) {
            callback(res)
        }
           
        )
    },
    del:function (id,callback) {
        $.post(PROT.category_del,{id:id},function (res) {
            callback(res)
        })
    },

    add:function (name,slug,callback) {
        
        $.post(PROT.category_add,
            {
                name:name,
                slug:slug
        },
        function (res) {
                callback(res)
            }
        )
    },

    edit:function (id,name,slug,callback) {
        $.post(PROT.category_edit,
            {
                id:id,
                name:name,
                slug:slug
        },
            function (res) {
                callback(res)
            }
        )
    }
    
}