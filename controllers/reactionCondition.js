const reactionCondition = async () => {
  try {
    await message.react(reactionCondition.emoji);
    console.log(`Reacted with ${reactionCondition.emoji} to message: "${message.content}"`);
  } catch (error) {
      console.error('Error while adding reaction:', error);
  }
}

module.exports = reactionCondition