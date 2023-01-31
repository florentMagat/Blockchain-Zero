import './styles.scss';

import Categories from './Categories';
import Header from './Header';
import Results from './Results';
import Footer from './Footer';

// == Composant
function App() {
  return (
    <div className="app">
      <div className="sticky">
        <Header />
        <Categories />
      </div>
      <div className="results">
        <Results />
      </div>
      <Footer />
    </div>
  );
}

// == Export
export default App;
