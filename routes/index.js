/**
 * app.get方法，用于指定不同的访问路径所对应的回调函数，这叫做“路由”（routing）。
 * 上面代码只指定了根目录的回调函数，因此只有一个路由记录。实际应用中，可能有多个路由记录。如下
 */

module.exports = function (app) {
    app.get('/',function (request,response) {
        response.send('hello world');
    })
    app.get('/customer',function (request,response) {
        response.send("customer page");
    })
    app.get("/admin",function(request,response) {
        response.send("admin page");
    })
};



