import React from 'react';
import {Container} from './style';
import {useState, useEffect} from 'react';
import RequestService from '../../../services/api';
import {useParams} from 'react-router-dom';
import BtnCardRequest from '../../BtnRequest';
import FormatDate from '../../FormatDate';
import { AiFillCloseCircle } from "react-icons/ai";

export default function SingleCardItem() {
  const [myFilteredCard, setMyFilteredCard] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const {id} = useParams();
  const parseId = JSON.parse(id);

  useEffect(() => {
    async function loadCardInfo(){
      const allCards = await RequestService.getCardsRequests();
      const myLocalCardList = allCards[0].cardsRequests.data;
      for(let i in myLocalCardList) {
        if(parseId === myLocalCardList[i].user_id){
          setMyFilteredCard(myLocalCardList[i]);
        }
      }
      
    }
    loadCardInfo();
  }, []);

  

  return (
    <Container>
      <div className="cardData">
        <h1>Dados da requisição</h1>
        <div className="editName">
          <span>Clique duas vezes no nome caso queira atuaizar</span>
          <br/>
          {isEditing && <span className="insertInfos">
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Ditete um novo nome" /> <AiFillCloseCircle className="closeBtn" onClick={() => setIsEditing(false)}/>
          </span> }
        </div>
        <p><span onDoubleClick={() => setIsEditing(true)}>Cliente: {myFilteredCard.name}</span></p>
        <p>Status requisição: {myFilteredCard.status}</p>
        <p>Data requisição: <FormatDate date={myFilteredCard.createdAt}/></p>
        <p>Limite: {myFilteredCard.limit}</p>
      </div>
      <div className="btnArea">
        <BtnCardRequest text="Atualizar nome" acao="updateName" newName={newName} data={myFilteredCard} />
        <BtnCardRequest text="Aprovar" acao="approve" data={myFilteredCard} />
        <BtnCardRequest text="Rejeitar" acao="reject" data={myFilteredCard}/>
        <BtnCardRequest text="Deletar" acao="delete" data={myFilteredCard}/>
      </div>
    </Container>
  )
}
