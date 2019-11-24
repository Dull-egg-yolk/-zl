// 模块化思想
// 创建一个对象 里面放方法
// user 是对象  login是方法
// 把接口单独放一个js文件里
// var local = 'http://localhost:8000';
var user = {
        // 方法里面有三个形参  callback是回调函数
        login:function (username,password,callback) {
            $.post(PROT.user_login,
            // 参数
                {
                    user_name:username,
                    password:password
                    },
                    
                    function (res) {
                        // 相当于把响应体一起传给callback
                        callback(res)
                    
                    }
            )
        },
        // 退出的方法
        logout:function (callback) {
            console.log(callback);
            
            $.post(PROT.user_logout,function(res){

                 callback(res);
                 console.log(res);
                 
             })
        },

        
        // 获取信息
        loginfo:function (callback) {
            $.get(PROT.user_loginfo,function (res) {
                
                callback(res)
                
            })
        }
}


    