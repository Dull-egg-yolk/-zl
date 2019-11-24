var baseURL = 'http://localhost:8000';
// 把接口放一个对象里 然后放方法
var PROT = {
    user_login:baseURL+"/admin/login",
    user_logout:baseURL+"/admin/logout",
    user_loginfo:baseURL+"/admin/getuser",

    category_show:baseURL+"/admin/category_search",
    category_del:baseURL+"/admin/category_delete",
    category_add:baseURL+"/admin/category_add",
    category_edit:baseURL+"/admin/category_edit",

    article_show:baseURL+"/admin/search",
    article_del:baseURL+"/admin/article_delete",
    article_publish:baseURL+"/admin/article_publish",
    article_edit:baseURL+"/admin/article_edit",


    common_show:baseURL+"/admin/comment_search",
    common_add:baseURL+"/post_comment",
    common_get:baseURL+"/get_comments"
}