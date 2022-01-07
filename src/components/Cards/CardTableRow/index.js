import React from 'react';
import {useHistory} from 'react-router-dom';
import FormatDate from '../../FormatDate';

export default function CardTableRow({rowData}) {  
  const history = useHistory();

  function getSingleCard(id){
    history.push(`/card_${id}`)
  }

  function formatData(value){
    let data = new Date(value);
    let day = data.getDay() + 1;
    let moth = data.getMonth();
    let yaer = data.getFullYear();
    
    return `${day.length > 1 ? day : '0' + day} / ${moth.length > 1 ? moth : '0' + moth} / ${yaer.length > 1 ? yaer : '0' + yaer}`;
  }

  formatData();
  
  return (
    <tr onClick={() => {getSingleCard(rowData.user_id)}}>
      <td >{rowData.name}</td>
      <td ><FormatDate date={rowData.createdAt}/></td>
      <td >{rowData.status}</td>
    </tr>
  )
}
