import { InputData } from "../interfaces/interfaces";

const rules = {
  hairColor: {
    brown: 4,
    black: 5,
    blonde: 8,
    redhead: 15,
    grey: 12,
  },
  hairHeigth: {
    short: 3,
    middle: 8,
    large: 15,
  },
  eyeColor: {
    black: 5,
    brown: 4,
    blue: 10,
    green: 8,
    grey: 20,
  },
  boobSize: {
    small: 5,
    middle: 10,
    big: 15,
    veryBig: 10,
  },
  physicalContext: {
    normal: 15,
    thin: 5,
    sporty: 8,
    chubby: 5,
    fat: 1,
  },
};

export default function GFResultFunction(inputData: InputData): number {
  let result: number = 0;
  if (inputData.age >= 18) {
    result += 10;
  } else if (inputData.age >= 25) {
    result += 8;
  } else if (inputData.age >= 35) {
    result += 6;
  } else if (inputData.age >= 50) {
    result -= 1;
  } else if (inputData.age >= 75) {
    result -= 5;
  }
  if (inputData.heigth >= 155) {
    result += 6;
  } else if (inputData.heigth >= 165) {
    result += 12;
  } else if (inputData.heigth >= 175) {
    result += 4;
  } else if (inputData.heigth >= 190) {
    result -= 5;
  }

  result += rules.hairColor[inputData.hairColor];
  result += rules.hairHeigth[inputData.hairHeigth];
  result += rules.eyeColor[inputData.eyeColor];
  result += rules.boobSize[inputData.boobSize];
  result += rules.physicalContext[inputData.physicalContext];
  return result;
}
