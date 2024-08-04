import * as clients from '../../api/clients';
import type {
  GetCurrentWeatherPayload,
  GetCurrentWeatherResponse,
} from './types';

export const getCurrentWeatherQuery = (payload: GetCurrentWeatherPayload) => {
  return `q=${payload.city},${payload.country}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
};

export const getCurrentWeather = async (
  payload: GetCurrentWeatherPayload,
): Promise<GetCurrentWeatherResponse | undefined> => {
  const response = await clients.openWeather.get(
    `/data/2.5/weather?${getCurrentWeatherQuery(payload)}`,
  );
  const result = await response.json();

  if (response.ok) {
    return result;
  }

  throw result;
};
