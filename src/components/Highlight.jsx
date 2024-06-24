const highlightWords = (text, wordsToHighlight) => {
  return text
    .split(" ")
    .map((word, index) => {
      const cleanedWord = word.replace(/[.,]/g, "").toLowerCase();
      const highlightClass = wordsToHighlight[cleanedWord];
      return highlightClass ? (
        <span key={index} className={highlightClass}>
          {word}
        </span>
      ) : (
        <span key={index}>{word} </span>
      );
    })
    .reduce((prev, curr) => [prev, " ", curr]);
};

export default highlightWords;
