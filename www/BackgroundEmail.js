module.exports = {
    alert: function(title, message, buttonLabel, successCallback) {
        cordova.exec(successCallback,
                     failure, // No failure callback
                     "BackgroundEmail",
                     "sendMail",
                     [to, message, buttonLabel]);
    }
};

