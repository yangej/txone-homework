import { Card } from '@mui/material';

import PageView from '../../../app/components/PageView';
import { MOCK_CHART_DATA } from '../../constants';
import PopulationChart from '../PopulationChart';
import PopulationCardHeader from './PopulationCardHeader';

const PopulationView = () => {
  return (
    <PageView title="Population">
      <Card variant="outlined" className="p-8" sx={{ maxWidth: '542px' }}>
        <PopulationCardHeader />
        <PopulationChart data={MOCK_CHART_DATA} />
      </Card>
    </PageView>
  );
};

export default PopulationView;
