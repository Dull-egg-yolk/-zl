var article = {
    show:function (obj,callback) {
        $.get(PROT.article_show,
            {page:obj.page,state:obj.state,type:obj.type},
            function (res) {
            
            callback(res)
            console.log(res);
        })
    },

    publish:function (fd,callback) {
        $.ajax({
            url:PROT.article_publish,
            type:"post",
            data:fd,
            processData:false,
            contentType:false,
            success:function(res){
               callback(res)
                
            }
        })
    },

    del:function (id,callback) {
        $.get(PROT.article_del,{id:id},function (res) {
            callback(res)
        })
    },

    edit:function (fd,callback) {
        $.ajax({
            url:PROT.article_edit,
            type:"post",
            processData:false,
            contentType:false,
            data:fd,
            success:function (res) {
                // console.log(res);
                // console.log(PROT.article_edit);
                callback(res)
                
            }
        })
    },

    get_edit:function (id,callback) {
        $.get(PROT.article_show,{id:id},function (res) {
            callback(res)
        })
    }

}