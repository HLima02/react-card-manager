import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 30px 4%;
  .userData {
    background: #313237;
    margin: 15px 0;
    width: 100%;
    max-width: 1000px;
    color: #fff;
    border-radius: 10px;
    padding: 30px 20px;
    h1{
      margin: 30px 0;
    }

    p{
      margin: 15px 0;
      font-size: 20px;
    }
  }
  button {
    border: none;
    background-color: #816BEA;
    color: #fff;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    font-size: 22px;
    padding: 15px 10px;
    border-radius: 10px;
    cursor: pointer;
  }
  
  @media only screen and (max-width: 680px){
    .userData {
      margin-top: 100px;
      h1 {font-size: 30px;}
      p {font-size: 16px;}
    }
    button {
        font-size: 18px
      }
  }
`;