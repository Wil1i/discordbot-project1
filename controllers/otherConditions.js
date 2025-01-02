const rangeValidation = require("./controllers/rangeValidation")
const rangeExtractor = require("./controllers/rangeExtractor")
const delay = require("./delay")

const otherConditions = async () => {
  const start = Date.now();

  const ranges = rangeExtractor(message.content);

  if (ranges.length > 0 && rangeValidation(ranges)) {
      await delay(isChannelCondition.delay || 0);
      await message.channel.send(isChannelCondition.response);
      const end = Date.now();
      const ping = end - start;
      console.log(`Message sent to channel ${message.channel.name} in server ${message.guild.name}. Response time: ${ping}ms`);
      return true;
  } else if (ranges.length === 0) {
      await delay(isChannelCondition.delay || 0);
      await message.channel.send(isChannelCondition.response);
      const end = Date.now();
      const ping = end - start;
      console.log(`Message sent to channel ${message.channel.name} in server ${message.guild.name}. Response time: ${ping}ms`);
      return true;
  } else {
      console.log("Invalid range(s) detected. Message not sent.");
  }
}

module.exports = otherConditions