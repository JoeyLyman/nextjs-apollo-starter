import {
  getDistance as getDistanceGeolib,
  getCompassDirection,
  convertDistance,
  getGreatCircleBearing,
} from "geolib";

export function flip180Degrees(degrees) {
  return degrees > 180 ? degrees - 180 : degrees + 180;
}

export function calculateCompassLetters(degrees) {
  if ((degrees >= 0 && degrees < 11.25) || degrees >= 348.75) {
    return "N";
  }
  if (degrees >= 11.25 && degrees < 33.75) {
    return "NNE";
  }
  if (degrees >= 33.75 && degrees < 56.25) {
    return "NE";
  }
  if (degrees >= 56.25 && degrees < 78.75) {
    return "ENE";
  }
  if (degrees >= 78.75 && degrees < 101.25) {
    return "E";
  }
  if (degrees >= 101.25 && degrees < 123.75) {
    return "ESE";
  }
  if (degrees >= 123.75 && degrees < 146.25) {
    return "SE";
  }
  if (degrees >= 146.25 && degrees < 168.75) {
    return "SSE";
  }
  if (degrees >= 168.75 && degrees < 191.25) {
    return "S";
  }
  if (degrees >= 191.25 && degrees < 213.75) {
    return "SSW";
  }
  if (degrees >= 213.75 && degrees < 236.25) {
    return "SW";
  }
  if (degrees >= 236.25 && degrees < 258.75) {
    return "WSW";
  }
  if (degrees >= 258.75 && degrees < 281.25) {
    return "W";
  }
  if (degrees >= 281.25 && degrees < 303.75) {
    return "WNW";
  }
  if (degrees >= 303.75 && degrees < 326.25) {
    return "NW";
  }
  if (degrees >= 326.25 && degrees < 348.75) {
    return "NNW";
  } else {
    return "deg";
  }
}

export function getDistance(
  originLong,
  originLat,
  destinationLong,
  destinationLat,
  distanceUnits = null
) {
  // If distance units specified, convert.  Otherwise, return in (m)
  // options: m, km, cm, mm, mi, sm, ft, in, yd
  return distanceUnits
    ? convertDistance(
        getDistanceGeolib(
          { latitude: originLat, longitude: originLong },
          { latitude: destinationLat, longitude: destinationLong }
        ),
        distanceUnits
      )
    : getDistanceGeolib(
        { latitude: originLat, longitude: originLong },
        { latitude: destinationLat, longitude: destinationLong }
      );
}

export function getDirectionDeg(
  originLong,
  originLat,
  destinationLong,
  destinationLat
) {
  return getGreatCircleBearing(
    { latitude: originLat, longitude: originLong },
    { latitude: destinationLat, longitude: destinationLong }
  );
}

export function getDirectionComp(
  originLong,
  originLat,
  destinationLong,
  destinationLat
) {
  return getCompassDirection(
    { latitude: originLat, longitude: originLong },
    { latitude: destinationLat, longitude: destinationLong }
  );
}
