/* eslint-disable linebreak-style */
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

function Ranking() {
  return (
    <div className="categories">
      <Button href="/" variant="warning" size="md">Classement par capitalisations (décroissant)</Button>{' '}
      <Button variant="primary" size="md">Classement par capitalisations (croissant)</Button>{' '}
      <Button variant="success" size="md">Plus fortes hausses (24 H)</Button>{' '}
      <Button variant="danger" size="md">Plus fortes baisses (24 H)</Button>{' '}
      {/* <Button variant="info" size="sm">Gaming</Button>{' '}
      <Button variant="light" size="sm">Memes Coins</Button>{' '}
      <Button variant="dark" size="sm">Autres</Button>
      <Button variant="secondary" size="sm">Stablecoins</Button>{' '}
      <Button variant="link" size="sm">Link</Button> */}
    </div>
  );
}

export default Ranking;
