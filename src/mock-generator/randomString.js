import randomInt from './randomInt';
import toSentenceCase from './toSentenceCase';

const words = 'sfgsdfdsfdsf sfgsdf sf es s sdf ssdfs sfs fsdf '
  .split(' ');

export default () => {
  const start = randomInt(words.length);
  const end = randomInt(words.length - start) + start + 1;
  return toSentenceCase(words.slice(start, end)
    .join(' '));
};
