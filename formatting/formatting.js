module.exports = input => {
  const str = input
    .join(" ")
    .trim()
    .replace("  ", " ");
  return str;
};
