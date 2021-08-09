import convert from "../../../display/data/unitConversions";

// Helper functions
export function convertSwellUnits(forecasts, units) {
  return forecasts.map((forecast) => {
    // Convert each swell
    const swellsConvertedToDesiredUnits = forecast.swells.map((swell) => {
      return {
        ...swell,
        significantHeight: convert(swell.significantHeight, "m", units),
      };
    });

    // Return original object, replacing each swell, and converting totalSignificantHeight to desired units
    return {
      ...forecast,
      totalSignificantWaveHeight: convert(
        forecast.totalSignificantWaveHeight,
        "m",
        units
      ),
      swells: swellsConvertedToDesiredUnits,
    };
  });
}

export function formatSwellDataIntoIndividualScatterPoints(forecasts) {
  return forecasts
    .map((hourlyForecast, indexOfHourlyForecast) => {
      const eachHourlyForecast = hourlyForecast.swells.map((swell, index) => {
        const eachSwell = {
          date: forecasts[indexOfHourlyForecast].date,
          significantHeight: swell.significantHeight,
          peakPeriod: swell.peakPeriod,
          meanDirection: swell.meanDirection,
          dueToLocalWindsProbable: swell.dueToLocalWindsProbable,
        };
        return eachSwell;
      });
      return eachHourlyForecast;
    })
    .flat();
}
