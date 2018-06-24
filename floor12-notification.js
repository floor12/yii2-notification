
var infos = [];

// notifys

function info(content, type) {
    infos.push({
        content: content,
        type: type
    })

    timeout = 1000
    glyph = 'fa-info-circle'
    info_class = 'info-object-info';

    if (type == 1) {
        info_class = 'info-object-success';
        timeout = 3000;
        glyph = 'fa-check-circle';

    }
    if (type == 2) {
        info_class = 'info-object-error';
        timeout = 3000;
        glyph = 'fa-exclamation-triangle';

    }

    icon = "<i class='fa " + glyph + "' aria-hidden='true'></i> ";

    var info = $('<div>').addClass('info-object').addClass(info_class).html(icon + content)
    info.appendTo($('#info-list'));
    setTimeout(function () {
        info.fadeOut(500);
    }, timeout);

}

$(document).ready(function () {
    infoBlock = $('<div>').attr('id', 'info-list').appendTo($('body'));
});
