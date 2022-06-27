import { useCookie } from 'h3';
import { generateAnswer, decode, encode, generateHint } from '~~/utils';

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
