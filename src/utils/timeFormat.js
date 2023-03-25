export const timeFormat = time => {
  const seconds = time % 60;
  const minutes = time >= 60 ? Math.trunc(time / 60) : 0;
  const hours = time >= 3600 ? Math.trunc(time / 3600) : 0;

  const numberFormat = (numObj) => {
    const type = Object.keys(numObj)[0];
    const number = Object.values(numObj)[0];

    if (type === 'seconds') {
      return (number > 9) ? number : ('0' + number);
    }

    if (type === 'minutes') {
      if (number < 10 && !hours) {
        return number;
      }
      if (number < 10 && hours) {
        return '0' + number;
      }
      if (number > 9 && number < 60) {
        return number;
      }
      if (number === 60) {
        return '00';
      }
      if (number > 60) {
        const mod = number % 60;
        return (mod > 9) ? (mod) : ('0' + mod);
      }
    }
  };

  switch (true) {
    case !!hours:
      return `${hours}:${numberFormat({ minutes })}:${numberFormat({ seconds })}`;
    case !!minutes:
      return `${numberFormat({ minutes })}:${numberFormat({ seconds })}`;
    default:
      return `${seconds}`;
  }
};
