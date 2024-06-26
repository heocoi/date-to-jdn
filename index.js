function toJdn(date) {
  const dd = date.getUTCDate();
  const mm = date.getUTCMonth() + 1;
  const yyyy = date.getUTCFullYear();

  const hour = date.getUTCHours();
  const minute = date.getUTCMinutes();
  const second = date.getUTCSeconds();

  const a = Math.trunc((14 - mm) / 12);
  const y = yyyy + 4800 - a;
  const m = mm + 12 * a - 3;

  const jd = dd + Math.trunc((153 * m + 2) / 5) + 365 * y + Math.trunc(y / 4) - Math.trunc(y / 100) + Math.trunc(y / 400) - 32045;
  return jd + (hour - 12) / 24 + minute / 1440 + second / 86400;
}

export default function dateToJdn(date) {
  if (!(date instanceof Date)) {
    throw new TypeError(`Expected a Date object, got ${typeof date}`);
  }

  return toJdn(date);
}
