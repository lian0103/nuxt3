
import wordlist from 'wordlist-english';

export const decode = (state = '[]') => JSON.parse(state);
export const encode = (state) => JSON.stringify(state);

export const generateAnswer = () => {
  const validWords = wordlist['english/10'].filter((word) => word.length === 5);
  const answer = validWords[Math.floor(Math.random() * validWords.length)];

  return answer;
};

export function generateHint(targetWord, guessWord) {
  const source = [...targetWord];

  return [...guessWord]
    .map((letter, i) => {
      if (letter?.toLowerCase() === targetWord[i]) {
        source[i] = null;
        return true;
      }
      return false;
    })
    .map((exact, i) => {
      if (exact) return '2';
      if (targetWord.includes(guessWord[i])) return '1';
      return '0';
    });
}

export default {};
