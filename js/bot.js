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

$("#radio-1").change(function(){
    hideModule();
});

$("#radio-2").change(function(){
    showModule();
    $('.HeaderText').text('Invite Setup');
    $('.InviteItems').css('display', 'inline-block');
    $('.MessageItems').css('display', 'none');
});

$("#radio-3").change(function(){
    showModule();
    $('.HeaderText').text('Message Setup');
    $('.MessageItems').css('display', 'inline-block');
    $('.InviteItems').css('display', 'none');
});

$("#radio-4").change(function(){
    showModule();
    $('.HeaderText').text('Giveaway Setup');
    $('.InviteItems').css('display', 'none');
    $('.MessageItems').css('display', 'none');
});

$("#radio-5").change(function(){
    showModule();
    $('.HeaderText').text('Twitter');
    $('.InviteItems').css('display', 'none');
    $('.MessageItems').css('display', 'none');
});

function showModule()
{
    $('.Setup').css('display', 'inline-block');
    $('.SaveBtn').css('display', 'inline-block');
    $(".Accounts").css("display", "inline-block");
    $(".DeleteBtn").css("display", "inline-block");
    $(".AddBtn").css("display", "inline-block");
}

function hideModule()
{
    $('.Setup').css('display', 'none');
    $('.SaveBtn').css('display', 'none');
    $(".Accounts").css("display", "none");
    $(".DeleteBtn").css("display", "none");
    $(".AddBtn").css("display", "none");
}

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