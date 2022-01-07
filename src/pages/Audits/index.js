import {useState, useEffect, useContext} from 'react';
import {UserContext} from '../../contexts/analistLogged';
import RequestService from '../../services/api';
import {Link, useHistory} from 'react-router-dom';
import HeaderPages from '../../components/HeaderPages';
import AuditContent from '../../components/Audit/AuditContent';
import {Container} from './style';

export default function Audits() {
  const [localAudits, setLocalAudits] = useState([]);
  const {isLogged, setIsLogged} = useContext(UserContext);
  const {loggedAnalistData, setLoggedAnalistData} = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if(!isLogged){
      history.push('/');
      return;
    }

    async function loadAllAudits(){
      const allAudits = await RequestService.getAudits();
      setLocalAudits(allAudits[0].audits.data);
    }

    loadAllAudits();
  }, [])

  return (
    <Container>
      <HeaderPages analistOnline={loggedAnalistData} />
      <AuditContent auditsList={localAudits}/>
    </Container>
  )
}