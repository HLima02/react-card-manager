import React from 'react';
import {Container} from './styles';
import UserTableRow from '../UserTableRow';

export default function UserContent({localListUsers}) {
  
  return (
    <Container>
      <div className="user-content-area">
        <h2>Listade usuários</h2>
        <table className="user-content-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Documento</th>
            </tr>
          </thead>
          <tbody>
            {localListUsers.map((item) => {
              return(
                <UserTableRow rowtData={item} key={item.id}  />
              );
            })}
          </tbody>
        </table>
      </div>
      
    </Container>
  )
}
