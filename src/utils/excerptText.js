const excerptText = (text, length) => {
  const excerpt = text.split(' ').reduce((excerpt, word) => {
    if (excerpt.length > length) return `${excerpt}`;
    return `${excerpt} ${word}`;
  }, '');

  return excerpt.length > length ? `${excerpt}[...]` : excerpt;
};
export default excerptText;
