let Bots;

var config = {
    botsUri: 'oda-a0eaf9f679d54302970832ba6d837e37-da2.data.digitalassistant.oci.oraclecloud.com',
    channelId: 'fa47c20c-456b-4d2d-936b-400bc9a03d17'
  };

setTimeout(() => {
    /**
     * SDK configuration settings
     *   
     * Other than URI, all fields are optional with two exceptions for auth modes
     * In client auth disabled mode, 'channelId' must be passed, 'userId' is optional
     * In client auth enabled mode, 'clientAuthEnabled: true' must be passed
     */
    let chatWidgetSettings = {
        theme: WebSDK.THEME.CLASSIC,
        URI: config.botsUri,                               // ODA URI, only the hostname part should be passed, without the https://
        clientAuthEnabled: false,     // Enables client auth enabled mode of connection if set true
        channelId: config.channelId,                   // Channel ID, available in channel settings in ODA UI
        enableAutocomplete: true,                   // Enables autocomplete suggestions on user input
        enableBotAudioResponse: true,               // Enables audio utterance of skill responses
        enableClearMessage: true,                   // Enables display of button to clear conversation
        enableSpeech: true,                         // Enables voice recognition
        enableTimestamp: false,                     // Show timestamp with each message
        speechLocale: WebSDK.SPEECH_LOCALE.EN_US,   // Sets locale used to speak to the skill, the SDK supports EN_US, FR_FR, and ES_ES locales for speech
        showConnectionStatus: false,

        i18n: {                                     // Provide translations for the strings used in the widget
            en: {                                   // en locale, can be configured for any locale
                chatTitle: 'Procurement Assistant'    // Set title at chat header
            }
        },

        initUserHiddenMessage: 'hi',
        width: '40vw',

        colors: {
            branding: '#8C1515',
            actionsBackground: '#4D4F53',
            actionsBackgroundHover: 'rgba(0,0,0,.3)',

        }
    };

    // Connect to the ODA
    Bots = new WebSDK(chatWidgetSettings);
    Bots.connect();

    // Create global object to refer Bots
    window[name] = Bots;
}, 0);
