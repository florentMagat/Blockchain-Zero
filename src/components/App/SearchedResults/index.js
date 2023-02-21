/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import axios from 'axios';

import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import Result from '../Result';

function SearchedResults() {
  const [data, setData] = useState({});

  // appel à axios afin de me connecter à l'API
  if (!data) return null;
  React.useEffect(() => {
    const recherchedCoin = async () => {
      const response = axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h');
      setData(response.data);
    };

    recherchedCoin();
  }, []);

  // création d'un nouveau tableau grâce au .map et envoie de celui-ci vers Result
  return (
    data.map((coin) => (
      <Result
        key={coin.id}
        {...coin}
      />
    )));
}

SearchedResults.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SearchedResults;
