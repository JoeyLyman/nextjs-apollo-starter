// https://stackoverflow.com/questions/17525215/calculate-color-values-from-green-to-red
// hue0 < hue1 for clockwise, opposite for counter clockwise.
// add or subtract 360 to force direction
export function percentageToHslColor(
  percentage,
  hue0,
  hue1,
  saturation = 100,
  lightness = 50
) {
  const hue = percentage * (hue1 - hue0) + hue0;
  const hslString = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  return hslString;
}
