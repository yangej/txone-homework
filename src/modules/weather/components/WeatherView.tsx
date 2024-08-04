import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import PageView from '../../app/components/PageView';
import { fromKelvinToCelsius } from '../utils';
import WeatherCardFooter from './WeatherCardFooter';
import WeatherCardHeader from './WeatherCardHeader';
import WeatherCardMain from './WeatherCardMain';
import WeatherSearchBar, { WeatherSearchBarProps } from './WeatherSearchBar';

const WeatherView = () => {
  const navigate = useNavigate();

  const handleSearch: WeatherSearchBarProps['onSubmit'] = (value) => {
    const searchParams = new URLSearchParams(value);

    navigate(`/weather?${searchParams.toString()}`);
  };

  return (
    <PageView title="Today's Weather">
      <WeatherSearchBar onSubmit={handleSearch} />
      <Card
        variant="outlined"
        className="flex flex-col justify-between p-8"
        sx={{ maxWidth: '542px' }}
      >
        <WeatherCardHeader location="Taipei" timestamp={1661870592} />
        <WeatherCardMain
          temperature={fromKelvinToCelsius(298.48)}
          main="Rain"
          description="moderate rain"
        />
        <WeatherCardFooter
          humidity={64}
          temperatures={{
            min: fromKelvinToCelsius(297.56),
            max: fromKelvinToCelsius(300.05),
          }}
        />
      </Card>
    </PageView>
  );
};

export default WeatherView;
