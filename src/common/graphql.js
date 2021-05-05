import { createClient } from 'urql';

export const client = createClient({
  url: 'https://react.eogresources.com/graphql',
});

export const getWeatherForLocationQuery = `
query($latLong: WeatherQuery!) {
  getWeatherForLocation(latLong: $latLong) {
    description
    locationName
    temperatureinCelsius
  }
}
`;

export const getMetricsQuery = `
query {
  getMetrics
}
`;
