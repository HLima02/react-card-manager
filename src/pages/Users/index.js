import {useState, useEffect, useContext} from 'react';
import {UserContext} from '../../contexts/analistLogged';
import RequestService from '../../services/api';
import {Link, useHistory} from 'react-router-dom';
import HeaderPages from '../../components/HeaderPages';
import UserContent from '../../components/User/UserContent';
import {Container} from './style';

export default function Users() {
  const [localListUsers, setLocalListUsers] = useState([]);
  const {isLogged, setIsLogged} = useContext(UserContext);
  const {loggedAnalistData, setLoggedAnalistData} = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if(!isLogged){
      history.push('/');
      return;
    }
    async function getUser(){
      const userRequested = await RequestService.getUsersList();
      setLocalListUsers(userRequested[0].users.data);
    }

    getUser();
  }, [])

  return (
    <Container>
      <HeaderPages analistOnline={loggedAnalistData} />
      <UserContent localListUsers={localListUsers}/>
    </Container>
  )
}