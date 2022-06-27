
import wordlist from 'wordlist-english';

export const decode = (state = '[]') => JSON.parse(state);
export const encode = (state) => JSON.stringify(state);

export const generateAnswer = () => {
  const validWords = wordlist['english/10'].filter((word) => word.length === 5);
  const answer = validWords[Math.floor(Math.random() * validWords.length)];

  return answer;
};

export default {};
