import {useState, useEffect, useContext} from 'react';
import {UserContext} from '../../contexts/analistLogged';
import RequestService from '../../services/api';
import {Link, useHistory} from 'react-router-dom';
import HeaderPages from '../../components/HeaderPages';
import CardsContent from '../../components/Cards/CardsContent';
import {Container} from './style';

export default function Cards() {
  const [cardsRequested, setCardsRequested] = useState([]);
  const {isLogged, setIsLogged} = useContext(UserContext);
  const {loggedAnalistData, setLoggedAnalistData} = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if(!isLogged){
      history.push('/');
      return;
    }

    async function getCardList(){
      const cardRequest = await RequestService.getCardsRequests();
      setCardsRequested(cardRequest[0].cardsRequests.data)
    }

    getCardList()
  }, [])

  return (
    <Container>
      <HeaderPages analistOnline={loggedAnalistData} />
      <CardsContent requestsGoingOn={cardsRequested}/>
    </Container>
  )
}