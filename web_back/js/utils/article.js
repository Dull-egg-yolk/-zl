var article = {
    show:function (callback) {
        $.get(PROT.article_show,function (res) {
            console.log(res);
            callback(res)
        })
    },

    publish:function (callback) {
        $.post(PROT.article_publish,function (res) {
            callback(res)
        })
    },

    del:function (id,callback) {
        $.get(PROT.article_del,{id:id},function (res) {
            callback(res)
        })
    }

}