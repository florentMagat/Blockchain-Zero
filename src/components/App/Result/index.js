/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';

import './styles.scss';

// appel à un fichier json pour tester les données avant de se connecter à l'API
import '../../../data/websites.json';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classNames from 'classnames';

// mes paramètres ne sont pas en camel case car ils sont identifiés ainsi dans l'appel API
function Result({ name, image, current_price, market_cap_rank, price_change_percentage_24h }) {
  // Arrondi de l'évolution du prix au cours des dernières 24 H
  const priceChange = Math.round(price_change_percentage_24h*100)/100;
  // L'évolution du prix sur les dernières 24 H apparait en vert si évolution à
  // la hausse, en rouge si baisse et reste en noir si neutre
  const evolution = classNames({
    'evolution-green': priceChange > 0,
    'evolution-null': priceChange === 0,
    'evolution-red': priceChange < 0,
  });

  return (
    <Card className="card-deck">
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
