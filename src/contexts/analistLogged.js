import {useState, useEffect, createContext} from 'react';
import RequestService from '../services/api';

export const UserContext = createContext({});

function UserProvider({children}) {
  const [isLogged, setIsLogged] = useState(false);
  const [loggedAnalistData, setLoggedAnalistData] = useState({});
  //Auditoria
  const [localAudits, setLocalAudits] = useState([]);

  /**
   * O useEffect abaixo busca informações do localStorage quando a página é carregada, 
   * caso o verificador isLogged seja verdadeiro, irá atualizar as states mantendo a 
   * seção que ja havia sido inicializada
   */
  useEffect(() => {
    const userAnalist = localStorage.getItem('userLogged');
    let myAnalistList = JSON.parse(userAnalist) || {};
    if(Object.keys(myAnalistList).length > 0){
      if(myAnalistList.isLogged){
        setIsLogged(myAnalistList.isLogged);
        setLoggedAnalistData(myAnalistList.loggedAnalistData);
      }
    }
  }, []);

  useEffect(() => {
    async function loadAllAudits(){
      const allAudits = await RequestService.getAudits();
      setLocalAudits(allAudits[0].audits.data);
    }
    loadAllAudits();
  }, []);

  /**
   * O useEffect abaixo inicia uma seção baseado na atualização dos dois parametros passados em colchetes
   * aramzenando os dados na localStorage do navegador
   */
  useEffect(() => {
    async function session(){
      let localAnalistLogged = {
        isLogged, loggedAnalistData
      }
      localStorage.setItem('userLogged', JSON.stringify(localAnalistLogged))
    }
    session();
  }, [isLogged, loggedAnalistData]);

  return (
    <UserContext.Provider value={{isLogged, setIsLogged, 
    loggedAnalistData, setLoggedAnalistData, 
    localAudits}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;