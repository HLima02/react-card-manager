import {useState, useEffect, useContext} from 'react';
import {UserContext} from '../../contexts/analistLogged';
import RequestService from '../../services/api';
import {Link, useHistory} from 'react-router-dom';
import HeaderPages from '../../components/HeaderPages';
import SingleCardItem from '../../components/Cards/SingleCardItem';
import {Container} from './styles';

export default function SingleCardData() {
  const {isLogged, setIsLogged} = useContext(UserContext);
  const {loggedAnalistData, setLoggedAnalistData} = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if(!isLogged){
      history.push('/');
      return;
    }

  }, [])

  return (
    <Container>
      <HeaderPages analistOnline={loggedAnalistData} />
      <SingleCardItem/>
    </Container>
  )
}