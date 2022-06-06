var opened = true;

$(function () {
    $(".menu").hover(onMenuIn, onMenuOut);
});

$(".dsmodule").click(function() {
    if (opened)
    {
        $('.Settings').css('top', '127px');
        $("#dsAngle").attr('class', 'fa fa-angle-down');
        $(".DiscordModules").css("height", '0px');
        opened = false;
    }
    else
    {
        $('.Settings').css('top', '233px');
        $("#dsAngle").attr('class', 'fa fa-angle-up');
        $(".DiscordModules").css("height", '170px');
        opened = true;
    }
});

function onMenuIn() {
    $('.menu').css("width", "190px");
    $('.btnText').css('width', '84px');
    $('.DiscordExpander').css('width', '84px');
    $('.DiscordModules').css('width', '84px');
    if (opened)
    {
        $('.Settings').css('top', '233px');
    }
}

function onMenuOut() {
    $('.menu').css("width", "90px");
    $('.btnText').css('width', '0px');
    $('.DiscordExpander').css('width', '0px');
    $('.DiscordModules').css('width', '0px');
    $('.Settings').css('top', '127px');
}