import { queryOptions, useQuery } from '@tanstack/react-query';

import { queryKeyFactory } from '../../libs/react-query/utils';
import { getCurrentWeather, getCurrentWeatherQuery } from './apis';
import { GetCurrentWeatherPayload } from './types';

const currentWeatherQueryKeys = queryKeyFactory('current-weather');

const getCurrentWeatherQueryOptions = (payload: GetCurrentWeatherPayload) =>
  queryOptions({
    queryKey: currentWeatherQueryKeys.list(getCurrentWeatherQuery(payload)),
    queryFn: () => getCurrentWeather(payload),
    enabled: !!payload.city && !!payload.country,
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 mins
  });

export const useCurrentWeather = (payload: GetCurrentWeatherPayload) => {
  return useQuery(getCurrentWeatherQueryOptions(payload));
};
