import PageView from '../../app/components/PageView';
import InfoCard from '../../common/components/InfoCard';
import { MOCK_CHART_DATA } from '../constants';
import PopulationCardCaption from './PopulationCardCaption';
import PopulationCardTitle from './PopulationCardTitle';
import PopulationChart from './PopulationChart';

const PopulationView = () => {
  return (
    <PageView title="Population">
      <InfoCard
        header={{
          left: <PopulationCardTitle />,
          right: <PopulationCardCaption />,
        }}
        sx={{ width: '542px' }}
      >
        <PopulationChart data={MOCK_CHART_DATA} />
      </InfoCard>
    </PageView>
  );
};

export default PopulationView;
