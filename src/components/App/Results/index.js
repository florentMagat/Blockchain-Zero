/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Result from '../Result';

const baseURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h';

// import data from '../../../data/coins.json';

function Results() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null;

  return (
    data.map((coin) => (
      <Result
        key={coin.id}
        {...coin}
      />
    ))
  );
}

Results.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Results;
