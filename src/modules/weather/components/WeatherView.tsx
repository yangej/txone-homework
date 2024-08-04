import { useSearchParams } from 'react-router-dom';

import PageView from '../../app/components/PageView';
import { useCurrentWeather } from '../hooks';
import WeatherDisplayView from './WeatherDisplayView';
import WeatherErrorView from './WeatherErrorView';
import WeatherLoadingView from './WeatherLoadingView';
import WeatherSearchBar, { WeatherSearchBarProps } from './WeatherSearchBar';

const WeatherView = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const city = searchParams.get('city') ?? '';
  const country = searchParams.get('country') ?? '';

  const { data, isLoading, isError } = useCurrentWeather({ city, country });

  const handleSearch: WeatherSearchBarProps['onSubmit'] = (value) => {
    setSearchParams(value);
  };

  const renderView = () => {
    if (isLoading) return <WeatherLoadingView />;

    if (data)
      return (
        <WeatherDisplayView
          city={data.name}
          timestamp={data.dt}
          main={data.weather[0].main}
          description={data.weather[0].description}
          temperatures={{
            current: data.main.temp,
            min: data.main.temp_min,
            max: data.main.temp_max,
          }}
          humidity={data.main.humidity}
        />
      );

    return <WeatherErrorView />;
  };

  return (
    <PageView title="Today's Weather">
      <WeatherSearchBar
        defaultValues={{ city, country }}
        hasError={isError}
        onSubmit={handleSearch}
      />
      {renderView()}
    </PageView>
  );
};

export default WeatherView;
