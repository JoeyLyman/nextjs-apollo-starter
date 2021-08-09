import { convertDistance } from "geolib";

export default function convert(value, from, to) {
  // First convert distance to meters, and time to seconds
  let valueInMetersAndSeconds;
  switch (from) {
    case "m":
    case "m/s":
      valueInMetersAndSeconds = value;
      break;
    case "km/h":
      valueInMetersAndSeconds = (value * 1000) / 3600;
      break;
  }

  // Then convert m/s to whatever
  let result;
  switch (to) {
    case "m":
      result = valueInMetersAndSeconds;
      break;
    case "m/s":
      result = valueInMetersAndSeconds;
      break;
    case "ft":
      result = valueInMetersAndSeconds * 3.28084;
      break;
    case "mi/h":
      result = (valueInMetersAndSeconds * 3600) / 1609.34;
      break;
  }

  return result;
}
