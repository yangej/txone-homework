import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from './modules/app/components/AppLayout';
import { isValidRoutePath } from './modules/app/utils';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={isValidRoutePath('/')} element={<AppLayout />}>
          <Route path={isValidRoutePath('/weather')} element={<>Weather</>} />
          <Route
            path={isValidRoutePath('/population')}
            element={<>Population</>}
          />
          <Route path="*" element={<>Not Found</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
