var baseURL = 'http://localhost:8000';
// 把接口放一个对象里 然后放方法
var PROT = {
    user_login:baseURL+"/admin/login",
    user_logout:baseURL+"/admin/logout",
    user_loginfo:baseURL+"/admin/getuser",

    category_show:baseURL+"/admin/category_search",
    category_del:baseURL+"/admin/category_delete",
    category_add:baseURL+"/admin/category_add",
}