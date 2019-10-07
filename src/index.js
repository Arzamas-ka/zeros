module.exports = expression => {
  let arrNumbers = [];

  expression.split("*").forEach(elem => {
    let result = BigInt(1);
    let num = BigInt(parseInt(elem));

    if (parseInt(elem) % 2 === 0 && elem.includes("!!")) {
      while (num) {
        result *= num;
        num -= BigInt(2);
      }

      arrNumbers.push(result);
      return;
    }

    if (parseInt(elem) % 2 !== 0 && elem.includes("!!")) {
      while (num - BigInt(1) !== BigInt(0)) {
        result *= num;
        num -= BigInt(2);
      }

      arrNumbers.push(result);
      return;
    }

    while (num - BigInt(1) !== BigInt(0)) {
      result *= num;
      num -= BigInt(1);
    }
    arrNumbers.push(result);
    return;
  });

  const result = arrNumbers.reduce((acc, next) => BigInt(acc) * BigInt(next));

  let countZeros = 0;
  const numbers = String(result)
    .split("")
    .reverse();

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== "0") {
      break;
    }
    countZeros++;
  }

  return countZeros;
};

