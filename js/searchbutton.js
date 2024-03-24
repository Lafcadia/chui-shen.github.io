document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />'+
    '<style>.search {box-sizing: content-box; cursor: pointer; padding: 10px 20px 10px; border: 1px solid;'+
    'border-radius: 3px; color: white; font-size: 18px; font-family: "黑体";}</style>'+
    '<script src="https://kit.fontawesome.com/2d5816cde8.js" crossorigin="anonymous"></script>'+
    '.1 {content: ""}';
function searching() {
    var searches = document.getElementsByTagName('search');
    for (var i = 0; i < searches.length; i++) {
        var type = searches[i].getAttribute('type');
        var content = searches[i].getAttribute('content');
        var newWindow = searches[i].getAttribute('newWindow')
        searchesJson={
            baidu: {name: '百度', color: 'blue', url: 'https://www.baidu.com/s?wd=', img: 'https://www.baidu.com/favicon.ico'},
            google: {name: 'Google', color: 'green', url: 'https://www.google.com/search?q=', img: 'https://raw.githubusercontent.com/ChuishenX/cdn/main/favicon.ico'},
            sogou: {name: '搜狗', color: 'magenta', url: 'https://www.sogou.com/web?query=', img: 'https:///www.sogou.com/images/logo/new/favicon.ico?v=4'},
            S360: {name: '360', color: 'lime', url: 'https://www.so.com/s?q=', img: 'https://s2.ssl.qhimg.com/static/121a1737750aa53d.ico'},
            bing: {name: '必应', color: 'gold', url: 'https://cn.bing.com/search?q=', img: 'https://cn.bing.com/sa/simg/favicon-trans-bg-blue-mg.ico'},
            github: {name: 'GitHub', color: 'black', url: 'https://github.com/search?q=', img: 'https://github.githubassets.com/favicons/favicon.svg'},
            yandex: {name: 'Yandex', color: 'crimson', url: 'https://yandex.com/search/?text=', img: 'https://yastatic.net/s3/home-static/_/7c/7ccfee6f1e81b14c5bef535d1ad7b7e0.png'}
        }
        var nW = "";
        if (newWindow == 'false') {
            nW = ';" onclick="window.open(`' + searchesJson[type].url + content + '`)"';
        }
        else {
            nW = ';" onclick="window.open(`' + searchesJson[type].url + content + '`, target=`_self`)"';
        }
        searches[i].innerHTML = '<button class="search" style="background-color: '+
            searches[i].color+
            nW+
            ';" title="使用"'+
            searches[i].name+
            '搜索"><img src="'+searchesJson[type].img+'" height="16" width="16" ></img>'+searchesJson[type].name+'搜索"'+content+'"</button>';
    }
}
//页面加载后运行
if (window.onload) {
    window.onload += function () {
        searching()
    }
} else {
    window.onload = function () {
        searching()
    }
}
