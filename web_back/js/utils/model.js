// 模块化思想
// 创建一个对象 里面放方法
// user 是对象  login是方法
var user = {
    // 方法里面有三个形参  callback是回调函数
    login:function (username,password,callback) {
        $.post("http://localhost:8000/admin/login",
        // 参数
            {
                user_name:username,
                password:password
                },
                function (res) {
                   callback(res)
                   
                }
        )
    }
}