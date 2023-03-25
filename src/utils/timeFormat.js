export const timeFormat = (time) => {
  const seconds = time % 60;
  const minutes = time >= 60 ? Math.round(time / 60) : 0;
  const hours = time >= 3600 ? Math.round(time / 3600) : 0;

  switch (true) {
    case hours:
      return `${hours}:${minutes}:${seconds}`;
    case minutes:
      return `${minutes}:${seconds}`;
    default:
      return `${seconds}`;
  }
};
