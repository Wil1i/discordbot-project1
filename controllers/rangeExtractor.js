const rangeExtractor = (messageContent) => {
  const rangeMatches = messageContent.match(/(\d+[-|>]\d+)/g);
  return rangeMatches || [];
}

module.exports = rangeExtractor