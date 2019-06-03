if (typeof Notifications !== 'object') {
    Notifications = {
        enabled: true
    };
}

Notifications.notify = function(message) {
if (typeof message === 'object' && typeof JSON === 'object') {
        message = JSON.stringify(message)
    }

    if (Notifications.enabled) {
        alert(message);
    }
}

Application.prototype.notify || (Application.prototype.notify = Notifications.notify);