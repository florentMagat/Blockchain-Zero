/* eslint-disable linebreak-style */
// importation des méthodes react
import { Route, Routes } from 'react-router-dom';

// importation de mes composants
import Ranking from './Ranking';
import Header from './Header';
import Results from './Results';
import Footer from './Footer';
import Simulator from './Simulator';
import NotFound from './NotFound';

import './styles.scss';
import Underconstruction from './Underconstruction';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              {/* <Ranking /> */}
              <div className="results">
                <Results />
              </div>
              <Footer />
            </>
          )}
        />

        <Route path="/simulator" element={<Underconstruction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
