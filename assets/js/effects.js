(function() {
    var OriginTitile = document.title, titleTime;
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.title = '( ﾟдﾟ)つ死鬼去哪里了！';
            clearTimeout(titleTime);
        } else {
            document.title = '(つェ⊂)咦!又好了!';
            titleTime = setTimeout(function() {
                document.title = OriginTitile;
            },2000);
        }
    });
})();