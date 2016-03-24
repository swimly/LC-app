$(function(){
    $(".actionsheet").click(function(){
        $(".app-actionsheet").addClass("app-show");
        $(".app-actionsheet").click(function(){
            $(this).removeClass("app-show");
        })
    })
})