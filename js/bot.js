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
    $('.TaskPage').css('display', 'inline-block');
});

$("#radio-2").change(function(){
    showModule();
    $('.SaveBtn').css('display', 'inline-block');
    $('.HeaderText').text('Invite Setup');
    $('.InviteItems').css('display', 'inline-block');
    $('.SettingsItems').css('display', 'none');
    $('.MessageItems').css('display', 'none');
    $('.TwitterItems').css('display', 'none');
    $('.GiveawayItems').css('display', 'none');
});

$("#radio-3").change(function(){
    showModule();
    $('.SaveBtn').css('display', 'inline-block');
    $('.HeaderText').text('Message Setup');
    $('.MessageItems').css('display', 'inline-block');
    $('.SettingsItems').css('display', 'none');
    $('.InviteItems').css('display', 'none');
    $('.TwitterItems').css('display', 'none');
    $('.GiveawayItems').css('display', 'none');
});

$("#radio-4").change(function(){
    showModule();
    $('.SaveBtn').css('display', 'inline-block');
    $('.HeaderText').text('Giveaway Setup');
    $('.GiveawayItems').css('display', 'inline-block');
    $('.SettingsItems').css('display', 'none');
    $('.MessageItems').css('display', 'none');
    $('.InviteItems').css('display', 'none');
    $('.TwitterItems').css('display', 'none');
});

$("#radio-5").change(function(){
    showModule();
    $('.SaveBtn').css('display', 'inline-block');
    $('.HeaderText').text('Twitter Setup');
    $('.TwitterItems').css('display', 'inline-block');
    $('.SettingsItems').css('display', 'none');
    $('.GiveawayItems').css('display', 'none');
    $('.MessageItems').css('display', 'none');
    $('.InviteItems').css('display', 'none');
});

$("#radio-6").change(function(){
    showModule();
    $('.SaveBtn').css('display', 'none');
    $('.HeaderText').text('Advanced modules');
    $('.SettingsItems').css('display', 'inline-block');
    $('.TwitterItems').css('display', 'none');
    $('.GiveawayItems').css('display', 'none');
    $('.MessageItems').css('display', 'none');
    $('.InviteItems').css('display', 'none');
});

function showModule()
{
    $('.ModulePage').css('display', 'inline-block');
    $('.Setup').css('display', 'inline-block');
    $(".Accounts").css("display", "inline-block");
    $(".DeleteBtn").css("display", "inline-block");
    $(".AddBtn").css("display", "inline-block");
    $('.TaskPage').css('display', 'none');
}

function hideModule()
{
    $('.ModulePage').css('display', 'none');
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