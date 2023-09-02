$("#menu").on("click", function(){
    $("#navbar-hamburger").toggle();
    $("#hero_index").toggle();
    $(window).on('scroll', function(){
        $("#navbar-hamburger").hide();
        $("#hero_index").show();
    })
})