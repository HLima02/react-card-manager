import {useState, useEffect, useContext} from 'react';
import {UserContext} from '../../contexts/analistLogged';
import RequestService from '../../services/api';
import {useParams, useHistory} from 'react-router-dom';
import HeaderPages from '../../components/HeaderPages';
import SingleAuditContent from '../../components/Audit/SingleAuditContent';
import {Container} from './style';
 

export default function SingleAuditData() {
  const {isLogged, setIsLogged} = useContext(UserContext);
  const {loggedAnalistData, setLoggedAnalistData} = useContext(UserContext);
  const {localAudits} = useContext(UserContext);
  const history = useHistory();
  const [auditArray, setAuditArray] = useState({}) 
  const {id} = useParams();

  useEffect(() => {
    if(!isLogged){
      history.push('/');
      return;
    }

    function getAudit(){
      const parseId = JSON.parse(id);
      for(let i in localAudits){
        if(parseId === localAudits[i].id) setAuditArray(localAudits[i])
      }
    }

    getAudit();
  }, [])

  return (
    <Container>
      <HeaderPages analistOnline={loggedAnalistData} />
      <SingleAuditContent audit={auditArray}/>
    </Container>
  )
}