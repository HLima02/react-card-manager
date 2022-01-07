import React from 'react';
import CardTableRow from '../CardTableRow';
import {Container} from './styles';

export default function CardsContent({requestsGoingOn}) {
  return (
    <Container>
       <div className="cards-content-area">
        <h2>Lista de cartões requisitados</h2>
        <table className="cards-content-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>data da requisição</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {requestsGoingOn.map(item => {
              return(
                <CardTableRow key={item.id} rowData={item} />
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  )
}
