import {useState, useEffect, useContext} from 'react';
import {UserContext} from '../../../contexts/analistLogged';
import {useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';
import {Container} from './styles';
import AuditTableRow from '../AuditTableRow';

export default function AuditContent({auditsList}) {
  const {loggedAnalistData, setLoggedAnalistData} = useContext(UserContext);
  const history = useHistory();
  let hasTotalAccesse = false;

  useEffect(() => {
    function checkAnalistAccesse(){
      for(let i in loggedAnalistData.roles){
        if(loggedAnalistData.roles[i] === "n2"){
          hasTotalAccesse = true;
        }
      }
      if(!hasTotalAccesse){
        history.push('/dashboard');
        toast.info('Seu usuário não tem acesso a Auditoria');
        return;
      } 
    }

    checkAnalistAccesse();
  }, [hasTotalAccesse]);

  
  return (
    <Container>
      <div className="user-content-area">
        <h2>Auditoria do Sistema</h2>
        <table className="user-content-table">
          <thead>
            <tr>
              <th>ID Operador</th>
              <th>Data de alteração</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {auditsList.map((item) => {
              return(
                <AuditTableRow rowtData={item} key={item.id}  />
              );
            })}
          </tbody>
        </table>
      </div>
      
    </Container>
  )
}
