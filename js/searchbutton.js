document.getElementsByTagName('style')[0].innerHTML += '.searchbutton {box-sizing: content-box; cursor: pointer; padding: 10px 20px 10px; border-radius: 6px; color: white; font-size: 1.1rem;}'+
    '#lunar-child {border-radius:50%; vertical-align: middle;}';
function searching() {
    var searches = document.getElementsByTagName('search');
    for (var i = 0; i < searches.length; i++) {
        var type = searches[i].getAttribute('type');
        var content = searches[i].getAttribute('content');
        var newWindow = searches[i].getAttribute('newWindow')
        searchesJson={
            baidu: {color: 'blue', url: 'https://www.baidu.com/s?wd=', img: 'https://www.baidu.com/favicon.ico'},
            google: {color: 'green', url: 'https://www.google.com/search?q=', img: 'https://raw.githubusercontent.com/ChuishenX/cdn/main/favicon.ico'},
            sogou: {color: 'magenta', url: 'https://www.sogou.com/web?query=', img: 'https:///www.sogou.com/images/logo/new/favicon.ico?v=4'},
            S360: {color: 'lime', url: 'https://www.so.com/s?q=', img: 'https://s2.ssl.qhimg.com/static/121a1737750aa53d.ico'},
            bing: {color: 'gold', url: 'https://cn.bing.com/search?q=', img: 'https://cn.bing.com/sa/simg/favicon-trans-bg-blue-mg.ico'},
            github: {color: 'black', url: 'https://github.com/search?q=', img: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'},
            yandex: {color: 'crimson', url: 'https://yandex.com/search/?text=', img: 'https://yastatic.net/s3/home-static/_/7c/7ccfee6f1e81b14c5bef535d1ad7b7e0.png'}
        }
        var nW = "";
        if (newWindow == 'true') {
            nW = ';" onclick="window.open(`' + searchesJson[type].url + content + '`)"';
        }
        else {
            nW = ';" onclick="window.open(`' + searchesJson[type].url + content + '`, target=`_self`)"';
        }
        searches[i].innerHTML = '<button type="button" class="searchbutton" style="vertical-align: middle; background-color: '+
            searchesJson[type].color+
            nW+
            ';" title="'+
            '搜索"><img id="lunar-child" src="'+
            searchesJson[type].img+
            '" style="width: 1.1rem; height: 1.1rem;" ></img>'+
            ' 搜索"'+
            content+'"</button>';
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
