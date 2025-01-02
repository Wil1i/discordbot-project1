const delay = require("./delay")

const novaController = async () => {
  if (message.content === '1') {
    console.log('Detected "1" from Nova bot. Preparing to send "take".');

    await delay(delayAfterOne);

    try {
        await message.channel.send('take');
        console.log('Sent "take" successfully.');
        return true;
    } catch (error) {
        console.error('Error while sending "take":', error);
    }
}
}

module.exports = novaController