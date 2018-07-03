// Notification array
var infos = [];

// Main function adds a new Notification in the queue and shows it.
function info(content, type) {
    initNotificationBlock();

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

// To show Notification we need to add a special block to your DOM-model with id='info-list'.
function initNotificationBlock() {
    if ($('#info-list').length == 0)
        $('<div>').attr('id', 'info-list').appendTo($('body'));
}

// When something goes wrong, this function will try to parse error response body to recognize error text.
// After that it will show an error notification.
function processError(response) {
    if (typeof(response.responseJSON) === 'object') {
        info(response.status + ': ' + response.responseJSON.message, 2)
        return true;
    }

    if (response.responseText.length > 5) {

        if (response.responseText.length < 40) {
            info(response.responseText, 2);
            return true;
        }

        if (response.responseText.length > 40) {
            matches = response.responseText.match(/with message (.+)/);

            if (!matches)
                matches = response.responseText.match(/\): (.+)/);

            if (matches) {
                info(response.status + ': ' + matches[1].replace("&#039;", ""), 2);
                return true;
            }
        }
    }
    info(response.status + ': ' + response.statusText, 2);
}