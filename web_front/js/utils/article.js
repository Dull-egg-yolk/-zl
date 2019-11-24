var article = {
    show:function (callback) {
        $.get(PROT.article_show,
            // {page:obj.page,state:obj.state,type:obj.type},
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


    get_edit:function (id,callback) {
        $.get(PROT.article_show,{id:id},function (res) {
            callback(res)
        })
    }

}