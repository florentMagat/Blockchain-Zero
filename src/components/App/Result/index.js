/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';

import './styles.scss';

import '../../../data/websites.json';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classNames from 'classnames';

function Result({ name, image, current_price, market_cap_rank, price_change_percentage_24h }) {
  const priceChange = Math.round(price_change_percentage_24h*100)/100;
  const evolution = classNames({
    'evolution-green': priceChange > 0,
    'evolution-null': priceChange === 0,
    'evolution-red': priceChange < 0,
  });

  return (
    <Card className="result" style={{ width: '18rem' }}>
      <div className="result_presentation">
        <p className="result_presentation_rank">#{market_cap_rank}</p>
        <Card.Img variant="top" src={image} className="result_image" />
      </div>
      <Card.Body>
        <Card.Title className="result_title">{ name }</Card.Title>
        <Card.Text >
          Evolution (24H) : <strong className={evolution}>{priceChange} %</strong>
        </Card.Text>
        <Card.Text>Prix actuel : <strong>{current_price} $</strong></Card.Text>
        <Button variant="btn btn-outline-primary">Plus d'informations</Button>
      </Card.Body>
    </Card>
  );
}

Result.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  current_price: PropTypes.number.isRequired,
  market_cap_rank: PropTypes.number.isRequired,
  price_change_percentage_24h: PropTypes.number.isRequired,
};

export default Result;
