// settings.js
var chatSettings = {
    URI: '<Server URI>',
    channelId: '<Channel ID>',
    userId: '<User ID>'
};

function initSDK(name) {
    // If WebSDK is not available, reattempt later
    if (!document || !WebSDK) {
        setTimeout(function() {
            initSDK(name);
        }, 2000);
        return;
    }

    // Default name is Bots
    if (!name) {
        name = 'Bots';
    }

    setTimeout(function() {
        var Bots = new WebSDK(chatSettings);    // Initiate library with configuration

        var isFirstConnection = true;
        Bots.on(WebSDK.EVENT.WIDGET_OPENED, function() {
            if (isFirstConnection) {
                Bots.connect()                          // Connect to server
                    .then(function() {
                        console.log('Connection Successful');
                    })
                    .catch(function(reason) {
                        console.log('Connection failed');
                        console.log(reason);
                    });
                isFirstConnection = false;
            }
        });

        window[name] = Bots;
    }, 0);
}
