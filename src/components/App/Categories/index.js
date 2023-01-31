import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

function Categories() {
    return (
        <div className='categories'>
          <Button variant="primary" size="sm">Infrastructure</Button>{' '}
          <Button variant="secondary" size="sm">Stablecoins</Button>{' '}
          <Button variant="success" size="sm">Defi</Button>{' '}
          <Button variant="warning" size="sm">Exchanges</Button>{' '}
          <Button variant="danger" size="sm">NFT</Button>{' '}
          <Button variant="info" size="sm">Gaming</Button>{' '}
          <Button variant="light" size="sm">Memes Coins</Button>{' '}
          <Button variant="dark" size="sm">Autres</Button>
          {/* <Button variant="link" size="sm">Link</Button> */}
        </div>
      );
    }

export default Categories;