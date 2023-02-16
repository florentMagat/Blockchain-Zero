/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
import { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

// appel à un fichier json pour tester les données avant de se connecter à l'API
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import classNames from 'classnames';

// mes paramètres ne sont pas en camel case car ils sont identifiés ainsi dans l'appel API
function Result({
  name, image, current_price, market_cap_rank, price_change_percentage_24h, symbol,
  market_cap, ath,
}) {
  // Arrondi de l'évolution du prix au cours des dernières 24 H
  const priceChange = Math.round(price_change_percentage_24h * 100) / 100;
  // L'évolution du prix sur les dernières 24 H apparait en vert si évolution à
  // la hausse, en rouge si baisse et reste en noir si neutre
  const evolution = classNames({
    'evolution-green': priceChange > 0,
    'evolution-null': priceChange === 0,
    'evolution-red': priceChange < 0,
  });

  // Cette fonction me permet d'afficher un chiffre avec un séparateur de milliers
  function numStr(a, b) {
    a = '' + a;
    b = b || ' ';
    let c = '', 
        d = 0;
    while (a.match(/^0[0-9]/)) {
      a = a.substr(1);
    }
    for (let i = a.length-1; i >= 0; i--) {
      c = (d != 0 && d % 3 == 0) ? a[i] + b + c : a[i] + c;
      d++;
    }
    return c;
  };

  // j'initialise le useState à false (pour le complément d'informations des cards)
  const [readMore, setReadMore] = useState(false);

  // afin de rendre les symboles plus lisibles, je les mets en majuscules
  const upperSymbol = symbol.toUpperCase();

  const extraContent = (
    <div className="card">
      <div className="card-header">
        {upperSymbol}
      </div>
      <div className="card-body">
        <p className="card-text">Capitalisation : {numStr(market_cap)} $</p>
        <p className="card-text">All time high (ATH) : {ath} $</p>
      </div>
    </div>
  );

  const linkName = readMore ? 'Réduire ' : 'Plus d\'informations ';

  return (
    <Card className="card-deck">
      <div className="result_presentation">
        <p className="result_presentation_rank">#{market_cap_rank}</p>
        <Card.Img variant="top" src={image} className="result_image" />
      </div>
      <Card.Body>
        <Card.Title className="result_title">{ name }</Card.Title>
        <Card.Text>
          Evolution (24H) : <strong className={evolution}>{priceChange} %</strong>
        </Card.Text>
        <Card.Text>Prix actuel : <strong>{current_price} $</strong></Card.Text>
        <Button onClick={() => {setReadMore(!readMore)}} variant="btn btn-outline-primary"><h6>{linkName}</h6>
          {readMore && extraContent}
        </Button>
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
  symbol: PropTypes.string.isRequired,
  market_cap: PropTypes.number.isRequired,
  ath: PropTypes.number.isRequired,
};

export default Result;
