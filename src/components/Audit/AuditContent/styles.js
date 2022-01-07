import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  color: #fff;
  padding: 0 4%;

  /* .user-content-area{
    background-color: #313237;
    margin: 50px 0;
    padding: 30px 4%;
  } */

  .user-content-table {
    width: 100%;
    max-width: 1000px;
    margin-bottom: 30px;
    thead {
      background-color: #816BEA;
      text-align:left;
      th{
        padding: 10px;
      }
    }
    tbody {
      text-align:left;
      tr{
        min-height: 60px;
        cursor: pointer;
        transition: 0.2s all ease;
      }
      tr:hover {
        background-color: #313237;
      }
      td{
        padding: 10px;
        
      }
    }
  }

  h2 {
    font-size: 60px;
    font-family: 'The Nautigal', 'cursive';
    margin-bottom: 40px;
  }
  p{
    font-size: 18px;
    text-align: center;
  }
  @media only screen and (max-width: 470px){
    .user-content-area {
      margin-top: 100px;
      h2 {font-size: 50px}
      td {
        font-size: 14px;
      }
    }
  }
`;