import React from 'react';
import {Link, useHistory} from 'react-router-dom';

export default function UserTableRow({rowtData}) {
  const history = useHistory();
  const emailSubst = rowtData.email.length > 10 ? rowtData.email.substr(0, 10) + '...' : rowtData.email;
  console.log(emailSubst);
  function getSingleUser(id){
    history.push(`/user_${id}`)
  }

  return (
    <tr onClick={() => getSingleUser(rowtData.id)} >
      <td >{rowtData.name}</td>
      <td >{emailSubst}</td>
      <td >{rowtData.document}</td>
    </tr>
  )
}
