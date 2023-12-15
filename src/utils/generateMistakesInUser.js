import seedRandom from 'seedrandom';

import { USER_MISTAKES_KEY } from './consts';
import { FAKE_DATA } from './consts';
import { getArrayItem } from './generateFakeData';

const chooseWhereMistake = (user, seedRandomize) => {
  const keyWithMistake =
    USER_MISTAKES_KEY[Math.floor(seedRandomize() * USER_MISTAKES_KEY.length)];
  const valueWithMistake = user[keyWithMistake].split('');
  return { keyWithMistake, valueWithMistake };
};

const deleteSymbol = (user, seedRandomize) => {
  const mistake = chooseWhereMistake(user, seedRandomize);
  const letterToDelete = getArrayItem(seedRandomize, mistake.valueWithMistake);
  const letterIndex = mistake.valueWithMistake.indexOf(letterToDelete);
  mistake.valueWithMistake.splice(letterIndex, 1);
  return {
    ...user,
    [mistake.keyWithMistake]: mistake.valueWithMistake.join(''),
  };
};

const addSymbol = (
  user,
  seedRandomize,
  country
) => {
  const mistake = chooseWhereMistake(user, seedRandomize);
  const randomValueIndex = Math.round(
    0 - 0.5 + seedRandomize() * (mistake.valueWithMistake.length - 0 + 1)
  );
  const letters = FAKE_DATA[country].letters.split('');
  const randomLetterIndex = Math.round(
    0 - 0.5 + seedRandomize() * (letters.length - 0 + 1)
  );
  mistake.valueWithMistake.splice(
    randomValueIndex,
    0,
    letters[randomLetterIndex]
  );
  return {
    ...user,
    [mistake.keyWithMistake]: mistake.valueWithMistake.join(''),
  };
};

const shiftSymbols = (user, seedRandomize) => {
  const mistake = chooseWhereMistake(user, seedRandomize);
  const wrongValue = mistake.valueWithMistake;
  const randomValueIndex = Math.round(
    0 - 0.5 + seedRandomize() * (wrongValue.length - 0 + 1)
  );
  const helper = wrongValue[randomValueIndex];
  wrongValue[randomValueIndex] = wrongValue[randomValueIndex + 1];
  wrongValue[randomValueIndex + 1] = helper;
  return {
    ...user,
    [mistake.keyWithMistake]: mistake.valueWithMistake.join(''),
  };
};

const generateMistake = (
  user,
  mistakes,
  seed,
  country
) => {
  const seedRandomize = seedRandom(seed);
  let mistakesNumber = Math.floor(mistakes);
  if (mistakes > 1) {
    const mistakeProbability = mistakes % mistakesNumber;
    if (seedRandomize() < mistakeProbability) {
      mistakesNumber++;
    }
  } else if (mistakes > 0 && mistakes < 1) {
    mistakesNumber = seedRandomize() < mistakes ? 1 : 0;
  }
  let wrongUser = user;
  for (let i = 0; i < mistakesNumber; i++) {
    if (seedRandomize() < 0.33) {
      wrongUser = deleteSymbol(wrongUser, seedRandomize);
    } else if (seedRandomize() < 0.66) {
      wrongUser = addSymbol(wrongUser, seedRandomize, country);
    } else {
      wrongUser = shiftSymbols(wrongUser, seedRandomize);
    }
  }
  return wrongUser;
};

export default generateMistake;