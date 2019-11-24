var common ={

    show:function (callback) {
        $.get(PROT.common_show,function (res) {
            callback(res)
        })
    },

    add:function (name,content,article_id,callback) {
        $.post(PROT.common_add,
            {
                'name':name,
                'content':content,
                'article_id':article_id
            },
            function (res) {
            callback(res)
        })
    },

    get:function (callback) {
        $.get(PROT.common_get,function (res) {
            callback(res)
        })
    }
}