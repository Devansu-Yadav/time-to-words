// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  const [hourStr, minuteStr] = time.split(':');

  const hours = parseInt(hourStr, 10);
  const minutes = parseInt(minuteStr, 10);

  const numbersToWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
    30: 'thirty',
  };

  function getNumberWord(num) {
    if (num <= 30) {
      return numbersToWords[num];
    }
    return numbersToWords[60 - num];
  }

  if (minutes === 0) {
    if (hours === 0) {
      return 'midnight';
    } if (hours === 12) {
      return 'midday';
    }
    return `${numbersToWords[hours % 12 || 12]} o'clock`;
  } if (minutes === 15) {
    return `quarter past ${numbersToWords[hours % 12 || 12]}`;
  } if (minutes === 30) {
    return `half past ${numbersToWords[hours % 12 || 12]}`;
  } if (minutes < 30) {
    return `${getNumberWord(minutes)} past ${numbersToWords[hours % 12 || 12]}`;
  }
  const remainingMins = 60 - minutes;
  const minutesInWords = getNumberWord(minutes);
  const nextHour = (hours + 1) % 12 || 12;

  if (remainingMins === 15) {
    return `quarter to ${numbersToWords[nextHour]}`;
  }
  return `${minutesInWords} to ${numbersToWords[nextHour]}`;
}

module.exports = { convertTimeToWords };
