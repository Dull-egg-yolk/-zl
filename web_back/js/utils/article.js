var article = {
    show:function (callback) {
        $.get(PROT.article_show,function (res) {
            console.log(res);
            callback(res)
        })
    },

    // publish:function (callback) {
    //     $.
    // }

}