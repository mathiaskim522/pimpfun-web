export function formatNumber(num: number) {
  if (num < 1000) {
    return num;
  }

  if (num < 1000000) {
    return (num / 1000).toFixed(1) + "K";
  }

  if (num < 1000000000) {
    return (num / 1000000).toFixed(1) + "M";
  }

  return (num / 1000000000).toFixed(1) + "B";
}
