import { generateAnswer } from '~~/utils';

const decode = (state = '[]') => JSON.parse(state);
const encode = (state) => JSON.stringify(state);

export default defineEventHandler(async (event) => {
  const answer = generateAnswer();

  setCookie(event.res, 'state', encode([]));
  setCookie(event.res, 'answer', encode(answer));
  return true;
});
