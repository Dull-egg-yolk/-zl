// 模块化思想
// 创建一个对象 里面放方法
// user 是对象  login是方法
var local = 'http://localhost:8000';
var user = {
        // 方法里面有三个形参  callback是回调函数
        login:function (username,password,callback) {
            $.post(local+"/admin/login",
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
            
            $.post("http://localhost:8000/admin/logout",function(res){

                 callback(res);
                 console.log(res);
                 
             })
        }
}


    