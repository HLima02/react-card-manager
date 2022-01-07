import {useState, useEffect, useContext} from 'react';
import {UserContext} from '../../contexts/analistLogged';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Container} from './styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg'

export default function HeaderPages({analistOnline}) {
  const {isLogged, setIsLogged} = useContext(UserContext);
  const {loggedAnalistData, setLoggedAnalistData} = useContext(UserContext);
  const history = useHistory();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleMenu(){
    let menuRetratil = document.querySelector('.menu-retratil');
    if(!isOpenMenu){
      menuRetratil.style.display = "block";
      setIsOpenMenu(!isOpenMenu);
    } else {
      menuRetratil.style.display = "none";
      setIsOpenMenu(!isOpenMenu);
    }
  }

  function endSession(){
    setIsLogged(false);
    setLoggedAnalistData({});
    history.push('/');
  }

  return (
    <Container>
      <div className="logo-title mobile">
        {!isOpenMenu ? 
        <GiHamburgerMenu className="icon-open-menu" onClick={handleMenu} /> : 
        <CgClose className="icon-open-menu" onClick={handleMenu} />}
        
        <h1><Link to="dashboard">Card Manager</Link></h1>
      </div>
      <div className="menu-retratil">
        <div className="analist-datas">
          <span><strong>ID Analista:</strong> {analistOnline.id}</span><br/>
          <span><strong>E-mail:</strong> {analistOnline.email}</span>
        </div>
        <ul className="analist-features">
          <li><Link to="usuarios">Usuários</Link></li>
          <li><Link to="cartoes">Cartões</Link></li>
          <li><Link to="auditoria">Auditoria</Link></li>
        </ul>
        <div className="analist-exit">
          <button onClick={endSession}>Sair</button>
        </div>
      </div>
    </Container>
  )
}
