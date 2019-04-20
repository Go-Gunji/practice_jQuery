$(function () {
    $("#menu dt").click(function () {
        $("#menu dd").slideToggle();
    });

    // 上に戻るボタンの初期化
    let topBtn = $("#scrollTop");
    topBtn.hide();

    // ある程度スクロールされたらpage topボタン表示
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
        topBtn.fadeIn();
        }
        else {
            topBtn.fadeOut();
        }
    });

    // クリックで上に戻る
    topBtn.click(function (event) {
        event.preventDefault();
        $("body, html").animate({
            scrollTop: 0
        }, 500);
    });

});

