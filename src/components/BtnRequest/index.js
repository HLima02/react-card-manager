import {useState, useEffect, useContext} from 'react';
import {UserContext} from '../../contexts/analistLogged';
import {Container} from './styles';
import RequestService from '../../services/api';
import { toast } from 'react-toastify';
import {useHistory} from 'react-router-dom';

export default function BtnRequests({text, newName, acao, data}) {
  const {localAudits} = useContext(UserContext);
  const [qtdeAudits, setQtdeAudit] = useState();
  const history = useHistory();
  let statusChanged = false;

  useEffect(() => {
    async function loadAllAudits(){
      const allAudits = await RequestService.getAudits();
      setQtdeAudit((allAudits[0].audits.data.length) - 1);
    }
    loadAllAudits();
  }, []);

  async function updateCardInfo(){
    switch (acao) {
      case 'updateName':
        data.name = newName;
        updateInfos(data.status);
        break;

      case 'delete':
        deleteItem(data.id);
        statusChanged = true;
        break;

      case 'approve':
        if(data.updatedAt === null){
          data.status = "Approved";
          toast.success('Cartão Aprovado');
          updateInfos(data.status);
          statusChanged = true;
        } else {
          toast.warning('Não é possivel alterar o status do cartão mais de uma vez');
          return;
        }
        break;
      case 'reject':
        if(data.updatedAt === null){
          data.status = "Reject";
          toast.info('Cartão Rejeitado');
          updateInfos(data.status);
          statusChanged = true;
        } else {
          toast.warning('Não é possivel alterar o status do cartão mais de uma vez');
          return;
        }
        
        break;
    }
    history.push('/cartoes');
  }

  async function deleteItem(id){
    const deleteItem = await RequestService.deleteCardRequest(id);
    toast.info('Item deletado');

    if(statusChanged){
      generateLogs(new Date(), 'Deleted');
    }
  }

  async function updateInfos(afterStatus){
    let now = null;
    console.log(afterStatus);
    if(afterStatus === 'Reject' || afterStatus === 'Approved'){
      now = new Date();
    }
    
    const atualizarNome = await RequestService.updateName(data.id, {
      createdAt: data.createdAt,
      updatedAt: now,
      status: data.status,
      id: data.id,
      user_id: data.user_id,
      name: data.name,
      digits: data.digits,
      limit: data.limit
    });
    if(statusChanged){
      generateLogs(now, afterStatus);
    }
  }

  async function generateLogs(dataUpdate, afterStatus){
    const postAudit = await RequestService.generateAudit({
      id: qtdeAudits + 1,
      createdAt: dataUpdate,
      type: afterStatus,
      beforeCreatedAt: data.createdAt,
      beforeId: data.id,
      beforeMetadatas: {
        name: data.name,
        digits: data.digits
      },
      beforeDigits: data.digits,
      beforeName: data.name,
      beforeStatus: "requested",
      beforeUpdatedAt: null,
      beforeUser_id: data.user_id,
      afterCreatedAt: data.createdAt,
      afterId: data.id,
      afterMetadatas: {
        name: data.name,
        digits: data.digits
      },
      afterDigits: data.digits,
      afterName: data.name,
      afterStatus: afterStatus,
      afterUpdatedAt: null,
      afterUser_id: data.user_id,
      requestedBy: data.id
    })
  }

  return (
    <Container>
      <button onClick={updateCardInfo}>{text}</button>
    </Container>
  )
}
