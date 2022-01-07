import {useState, useEffect} from 'react';
import {Container} from './style';
import RequestService from '../../../services/api';
import {useParams} from 'react-router-dom';
import BtnCardRequest from '../../BtnRequest';
import FormatDate from '../../FormatDate';

export default function SingleAuditContent() {
  const [audit, setAudit] = useState({});
  const {id} = useParams();

  useEffect(() => {
    async function loadAudit(){
      const parseId = JSON.parse(id)
      const requestAudit = await RequestService.getAudits();
      const convertAudit = requestAudit[0].audits.data;
      for(let i in convertAudit){
        if(parseId === convertAudit[i].id) setAudit(convertAudit[i]);
      }
    }
    loadAudit();
  }, []);
  return (
    <Container>
      <div className="userData">
        <h1>Dados da operação</h1>
        <p>ID solicitante: {audit.requestedBy}</p>
        <h2>Solicitação</h2>
        <p>Data: <FormatDate date={audit.beforeCreatedAt} /></p>
        <p>Id solicitação: {audit.beforeId} </p>
        <p>Nome solicitante: {audit.beforeName} </p>
        <p>Status: {audit.beforeStatus} </p>

        <h2>Atualização</h2>
        <p>Data: <FormatDate date={audit.afterCreatedAt} /></p>
        <p>Id solicitação: {audit.afterId} </p>
        <p>Nome solicitante: {audit.afterName} </p>
        <p>Status: {audit.afterStatus} </p>
      </div>
    </Container>
  )
}
