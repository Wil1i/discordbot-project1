const rangeValidation = async (ranges) => {
  return ranges.every(range => {
    const rangeParts = range.match(/(\d+)[-|>](\d+)/);
    if (!rangeParts) return false;

    const start = parseInt(rangeParts[1], 10);
    const end = parseInt(rangeParts[2], 10);

    return start >= config.minRange && end <= config.maxRange;
});
}

module.exports = rangeValidation