import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from './modules/app/components/AppLayout';
import { isValidRoutePath } from './modules/app/utils';

const WeatherView = lazy(
  () => import('./modules/weather/components/WeatherView'),
);
const PopulationView = lazy(
  () => import('./modules/population/components/PopulationView'),
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={isValidRoutePath('/')} element={<AppLayout />}>
          <Route
            path={isValidRoutePath('/weather')}
            element={
              <Suspense fallback={<div>Page Loading...</div>}>
                <WeatherView />
              </Suspense>
            }
          />
          <Route
            path={isValidRoutePath('/population')}
            element={
              <Suspense fallback={<div>Page Loading...</div>}>
                <PopulationView />
              </Suspense>
            }
          />
          <Route path="*" element={<>Not Found</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
