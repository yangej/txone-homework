import loadingIconSrc from '../../../assets/ic_loading.svg';
import InfoCard from '../../common/components/InfoCard';

const WeatherLoadingView = () => {
  return (
    <InfoCard
      className="flex justify-center items-center"
      sx={{ width: '542px', height: '400px' }}
    >
      <img className="w-6" alt="loading" src={loadingIconSrc} />
    </InfoCard>
  );
};

export default WeatherLoadingView;
