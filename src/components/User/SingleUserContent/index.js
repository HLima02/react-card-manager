import {useState, useEffect, useContext} from 'react';
import {UserContext} from '../../../contexts/analistLogged';
import {Container} from './style';
import RequestService from '../../../services/api';
import {useParams, useHistory} from 'react-router-dom';
import FormatDate from '../../FormatDate';
import { toast } from 'react-toastify';

export default function UserTableRow() {
  const {loggedAnalistData, setLoggedAnalistData} = useContext(UserContext);
  let hasTotalAccesse = false;
  const [myFilteredUser, setMyFilteredUser] = useState({});
  const [cardList, setCardList] = useState([]);
  const {id} = useParams();
  const history = useHistory();
  const [qtdeAudits, setQtdeAudit] = useState();
  let hasCard = false;

  useEffect(() => {
    //Verificação das roles do Analista
    function checkAnalistAccesse(){
      for(let i in loggedAnalistData.roles){
        if(loggedAnalistData.roles[i] === "n2"){
          hasTotalAccesse = true;
          return;
        }
      }
      // if(hasCard) console.log('teste')
    }

    checkAnalistAccesse();
  }, [hasTotalAccesse]);

  useEffect(() => {
    //Requisição lista de usuários
    async function loadUsers(){
      const requestUsers = await RequestService.getUsersList();
      let ArrayUsers = requestUsers[0].users.data;
      //conversão do id para interira para verificação
      let idUrl = id.split('_');
      let USerParse = JSON.parse(idUrl[1]);

      for(let i = 0; i < ArrayUsers.length; i++){
        if(ArrayUsers[i].id === USerParse){
          setMyFilteredUser(ArrayUsers[i]);
        }
      }
      return;
    }

    //Requisição da lista de cards cadastrados
    async function loadCards(){
      const requestUsers = await RequestService.getCardsRequests();
      setCardList(requestUsers[0].cardsRequests.data);
      //console.log(requestUsers[0].cardsRequests.data)
    }

    //Requisição lista de auditorias para incremento dos ids
    async function loadAllAudits(){
      const allAudits = await RequestService.getAudits();
      setQtdeAudit((allAudits[0].audits.data.length) - 1);
    }

    loadAllAudits();
    loadUsers();
    loadCards();
  }, [id, hasCard]);

  

  //Função de verificação e requisição do cartão
  async function requestCard(){
    function generateValues(){
      let valueGenereted = Math.floor(Math.random(1000, 9999) * 10000);
      return valueGenereted;
    }

    for(let i in cardList){
      //Verificação se o usuário já possui cartão
      if(myFilteredUser.id === cardList[i].user_id){
        toast.info('Este usuário já solicitou um cartão');
        history.push('/usuarios');
        return;
      } else {
        //verificação se usuário poder ou não ter cartão
        //ira fazer a socilitação caso possa
        for(let y in myFilteredUser.enabledFeatures){
          if(myFilteredUser.enabledFeatures[y] == 0){
            hasCard = true;
          } 
        }
      }
    }
    //Requisição do cartão
    if(hasCard){
      const requestDate = new Date();
      toast.success('Solicitação feita com sucesso');
      const requestCard = await RequestService.requestCard({
        createdAt: requestDate,
        updatedAt: null,
        status: "requested",
        id: myFilteredUser.id + 1000,
        user_id: myFilteredUser.id,
        name: myFilteredUser.name,
        digits: generateValues(),
        limit: generateValues()
      });
      history.push('/cartoes');
      generateLogs(myFilteredUser.id, requestDate)
    } else {
      toast.info('Este usuário não pode solicitar cartão');
      history.push('/usuarios');
    }
  
  }

  async function generateLogs(userId, dataUpdate){
    let refAudit = {};
    const requestUsers = await RequestService.getCardsRequests();
    let listRequestedCard = requestUsers[0].cardsRequests.data;
    for(let i in listRequestedCard){
      if(userId === listRequestedCard[i].user_id){
        refAudit = listRequestedCard[i];
      }
      
    }

    const postAudit = await RequestService.generateAudit({
      id: qtdeAudits + 1,
      createdAt: dataUpdate,
      type: "request",
      beforeCreatedAt: refAudit.createdAt,
      beforeId: refAudit.id,
      beforeMetadatas: {
        name: refAudit.name,
        digits: refAudit.digits
      },
      beforeDigits: refAudit.digits,
      beforeName: refAudit.name,
      beforeStatus: null,
      beforeUpdatedAt: null,
      beforeUser_id: refAudit.user_id,
      afterCreatedAt: refAudit.createdAt,
      afterId: refAudit.id,
      afterMetadatas: {
        name: refAudit.name,
        digits: refAudit.digits
      },
      afterDigits: refAudit.digits,
      afterName: refAudit.name,
      afterStatus: "request",
      afterUpdatedAt: null,
      afterUser_id: refAudit.user_id,
      requestedBy: refAudit.id
    })
  }

  return (
    <Container>
      <div className="userData">
        <h1>Dados do Usuário</h1>
        <p>Nome: {myFilteredUser.name}</p>
        <p>E-mail: {myFilteredUser.email}</p>
        <p>Aniversário: <FormatDate date={myFilteredUser.BirthDate}/> </p>
        <p>Criação: <FormatDate date={myFilteredUser.createdAt}/></p>
        <p>Número identidade: {myFilteredUser.document}</p>
        <p>Endereço: {myFilteredUser.neighborhood} - {myFilteredUser.city} / {myFilteredUser.state}</p>
        <p>CEP: {myFilteredUser.postalCode}</p>
        {hasTotalAccesse ? 
          <p>Salário: {myFilteredUser.salaryBase}</p> : 
          ''
        }
      </div>

      <button onClick={requestCard}>Solicitar cartão</button>
    </Container>
  )
}
