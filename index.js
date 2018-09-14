$(document).ready(function () {    
    $('#name').ColorPlaceholder();
    $('#email').ColorPlaceholder({
        text:'請輸入你的信箱'
    });
    $('#birthday').ColorPlaceholder({
        color:'#45aaf2',
        text:'告訴我妳的生日'
    });
});