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

    h2 {
      margin: 30px 0 20px;
    }

    p{
      margin: 15px 0;
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 680px){
    .userData {
      margin-top: 100px;
      h1 { font-size: 30px;}
      h2 {font-size: 23px}
      p { font-size: 16px}
    }
  }
`;