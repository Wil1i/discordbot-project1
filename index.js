import { Client } from 'discord.js-selfbot-v13';

const config = require("./config.json")

const novaController = require("./controllers/novaController")
const reactionCondition = require("./controllers/reactionCondition")
const otherConditions = require("./controllers/otherConditions")

const client = new Client({
    checkUpdate: false
});

client.on('ready', () => {
    console.log('Client is ready');
});

client.on('messageCreate', async (message) => {
    if (!message.guild) return; 

    const isChannelCondition = config.channelConditions[message.channel.id];
    const isReactionCondition = config.reactionConditions[message.channel.id];

    let responseSent = false;

    // مدیریت پیام‌های مرتبط با نوا
    if (config.nova.channels.includes(message.channel.id) && message.author.id === config.nova.botId)
        novaController(message).then(res => {if(res == true) responseSent = true})

    // بررسی سایر شرایط
    if (!responseSent && isChannelCondition && message.content.toLowerCase().includes(isChannelCondition.trigger.toLowerCase()))
        otherConditions(message).then(res => {if(res == true) responseSent = true})

    // بررسی پیام‌ها برای اضافه کردن ری‌اکشن
    if (isReactionCondition && message.content.toLowerCase().includes(isReactionCondition.trigger.toLowerCase()))
        reactionCondition(message, isReactionCondition)
        
});

client.login(config.token);
