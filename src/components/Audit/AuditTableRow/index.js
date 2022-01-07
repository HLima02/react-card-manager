import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import FormatDate from '../../FormatDate';

export default function AuditTableRow({rowtData}) {
  const history = useHistory();
  let status = null;

  switch(rowtData.type){
    case 'card-status-change':
      status = 'Mudança de status';
      break;
    case 'request':
      status = 'Requisição';
      break;
    case 'Deleted':
      status = 'Deletado';
      break;
    default: 
      status = 'Mudança de status';
      break;
  }
  function getSingleUser(id){
    history.push(`/audit_${id}`)
  }

  return (
    <tr onClick={() => getSingleUser(rowtData.id)} >
      <td >{rowtData.requestedBy}</td>
      <td ><FormatDate date={rowtData.afterCreatedAt} /></td>
      <td >{status}</td>
    </tr>
  )
}
