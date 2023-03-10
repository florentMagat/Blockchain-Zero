/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Result from '../Result';

function Results({ baseURL }) {
  const [data, setData] = React.useState(null);

  // appel à axios afin de me connecter à l'API
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null;

  // création d'un nouveau tableau grâce au .map et envoie de celui-ci vers Result
  return (
    data.map((coin) => (
      <Result
        key={coin.id}
        {...coin}
      />
    )));
}

Results.propTypes = {
  baseURL: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Results;
