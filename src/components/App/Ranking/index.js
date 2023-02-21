/* eslint-disable linebreak-style */
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

function Ranking() {
  return (
    <div className="categories">
      <Button href="/" variant="warning" size="md">Capitalisations ( Top 100 )</Button>{' '}
      <Button href="/asc" variant="primary" size="md">Capitalisations ( croissantes )</Button>{' '}
      <Button href="/volumes/desc" variant="success" size="md">Volumes / 24h ( Top 100 )</Button>{' '}
      <Button href="/volumes/asc" variant="danger" size="md">Volumes / 24h ( croissant )</Button>{' '}
    </div>
  );
}

export default Ranking;
