var article = {
    show:function (obj,callback) {
        $.get(PROT.article_show,
            {page:obj.page,state:obj.state,type:obj.type},
            function (res) {
            
            callback(res)
            console.log(res);
        })
    },

    // publish:function (callback) {
    //     $.post(PROT.article_publish,
    //         {data:fd, processData:false,contentType:false},
    //         function (res) {
    //         callback(res)
    //     })
    // },

    del:function (id,callback) {
        $.get(PROT.article_del,{id:id},function (res) {
            callback(res)
        })
    },

    edit:function (callback) {
        $.post(PROT.article_edit,function (res) {
            callback(res)
        })
    }

}