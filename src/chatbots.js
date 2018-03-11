/* chatbots.js */
'use strict';
const Botkit = require('botkit');
// use the tokens you got from the previous step
const slack_token = process.env.SNOOPER_TOKEN;
const slack_oauth = process.env.SLACK_OAUTH;

const slackController = Botkit.slackbot({
    // optional: wait for a confirmation events for each outgoing message before continuing to the next message in a conversation
    require_delivery: true
});
const slackBot = slackController.spawn({
    token: slack_token
});
// create rtm connection
slackBot.startRTM((err, bot, payload) => {
    if(err) {
        throw new Error('Could not connect to Slack: ' + err);
    }
    slackController.log('Slack connection established.');
});
// listener that handles incoming messages

slackController.hears(['.*'], ['direct_message', 'direct_mention'], (bot, message) => {
    slackController.log('Slack message received');
console.log("Yada yada yada")
bot.reply('I have received your message!')
});


slackController.setupWebserver(process.env.port || 4205, function (err, webserver) {
    console.log("Setting up webhook endpoint");
    slackController.createWebhookEndpoints(slackController.webserver);

});
//slackBot.createConversation("Do you come here often?")


// exports.fn();