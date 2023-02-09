import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

function Categories() {
    return (
        <div className='categories'>
          <Button variant="warning" size="sm">Classement par capitalisations</Button>{' '}
          <Button variant="primary" size="sm">Classement par capitalisations (croissant)</Button>{' '}
          <Button variant="success" size="sm">Plus fortes hausses (24 H)</Button>{' '}
          <Button variant="danger" size="sm">Plus fortes baisses (24 H)</Button>{' '}
          {/* <Button variant="info" size="sm">Gaming</Button>{' '}
          <Button variant="light" size="sm">Memes Coins</Button>{' '}
          <Button variant="dark" size="sm">Autres</Button>          
          <Button variant="secondary" size="sm">Stablecoins</Button>{' '}
          <Button variant="link" size="sm">Link</Button> */}
        </div>
      );
    }

export default Categories;