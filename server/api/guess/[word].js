import { useCookie } from 'h3';
import { generateAnswer, decode, encode } from '~~/utils';

export default defineEventHandler(async (event) => {
  let { word: guessWord = null } = event.context.params;

  if (!guessWord || guessWord.length !== 5) {
    return createError({
      statusCode: 422,
      message: 'invalid guess',
    });
  }

  let targetWord = '';
  if (useCookie(event.req, 'answer')) {
    targetWord = decode(useCookie(event.req, 'answer'));
  } else {
    targetWord = generateAnswer();
    setCookie(event.res, 'answer', encode(targetWord));
  }

  const state = decode(useCookie(event.req, 'state'));
  state.push([guessWord, generateHint(targetWord, guessWord), targetWord]);
  setCookie(event.res, 'state', encode(state));

  return state;
});

function generateHint(targetWord, guessWord) {
  const source = [...targetWord];

  return [...guessWord]
    .map((letter, i) => {
      if (letter === targetWord[i]) {
        source[i] = null;
        return true;
      }
      return false;
    })
    .map((exact, i) => {
      if (exact) return '2';
      if (source.includes(guessWord[i])) return '1';
      return '0';
    });
}
