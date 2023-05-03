/* eslint-disable linebreak-style */
// importation des méthodes react
import { Route, Routes } from 'react-router-dom';

// importation de mes composants
import Footer from './Footer';
import Header from './Header';
import NotFound from './NotFound';
import Ranking from './Ranking';
import Results from './Results';
import SearchedResults from './SearchedResults';
import Underconstruction from './Underconstruction';

// importation des styles
import './styles.scss';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Ranking />
              <div className="results">
                <Results
                  baseURL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h"
                />
              </div>
            </>
          )}
        />
        <Route
          path="/asc"
          element={(
            <>
              <Ranking />
              <div className="results">
                <Results
                  baseURL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_asc&per_page=50&page=1&sparkline=false&price_change_percentage=24h"
                />
              </div>
            </>
          )}
        />
        <Route
          path="/volumes/desc"
          element={(
            <>
              <Ranking />
              <div className="results">
                <Results
                  baseURL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h"
                />
              </div>
            </>
          )}
        />
        <Route
          path="/volumes/asc"
          element={(
            <>
              <Ranking />
              <div className="results">
                <Results
                  baseURL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_asc&per_page=50&page=1&sparkline=false&price_change_percentage=24h"
                />
              </div>
            </>
          )}
        />
        <Route
          path="/coin/:id"
          element={(
            <>
              <Ranking />
              <div className="results">
                <SearchedResults />
              </div>
            </>
          )}
        />
        <Route path="/simulator" element={<Underconstruction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
