import { Fragment } from 'react';
import './DropdownConnection.css'

const DropdownConnection = () => {
  return(
    <Fragment>
      <div className="dropdown-connection" data-testid="dropdown" >
        <i className="fas fa-user-circle fa-lg"></i>
        <h2>Connection</h2>
        <i className="fas fa-chevron-down fa-lg"></i>
        <div className="dropdown-content" data-testid="content">
          <p>Enregistre toi afin de participer à la communauté</p>
          <button>Inscription</button>
          <hr />
          <p>Déjà inscrit ?</p>
          <button>Se connecter</button>
        </div>
      </div>
    </Fragment>
  );
}

export default DropdownConnection