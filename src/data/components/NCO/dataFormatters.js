export function formatHourlyLevels(tidePredictions) {
  return (
    tidePredictions
      //.filter((tidePredictions) => tidePredictions.hourlyLevels)
      .map((tidePredictions) => tidePredictions.hourlyLevels)
      .reduce((acc, value) => {
        return [].concat(acc, value);
      }, [])
  );
}

export function formatPeaks(tidePredictions) {
  return tidePredictions
    .map((tidePredictions) => tidePredictions.peaks)
    .reduce((acc, value) => {
      return [].concat(acc, value);
    }, []);
}

export function concatAllLevels(tidePredictions) {
  const hourlyLevels = formatHourlyLevels(tidePredictions);
  const peaks = formatPeaks(tidePredictions);
  return peaks.concat(hourlyLevels).sort((a, b) => a.time - b.time);
}
