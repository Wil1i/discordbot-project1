const config = require("../config.json")

const reactionHandler = (reaction) => {
  if(config.reactionConditions[reaction.message.channel.id] && reaction.emoji.name == config.reactionConditions[reaction.message.channel.id].emoji){
    reaction.message.react(config.reactionConditions[reaction.message.channel.id].emoji)    
  }

  if(config.guildReactionCondition[reaction.message.guild.id]){
    reaction.message.react(config.guildReactionCondition[reaction.message.guild.id].emoji)    
  }
}

module.exports = reactionHandler