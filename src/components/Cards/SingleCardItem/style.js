import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 30px 4%;
  .cardData {
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
    .editName {
      width: 100%;
      margin: 50px 0;
      color: #816BEA;
      .insertInfos {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        input{
          width: 95%;
          padding: 5px;
          margin: 5px 0;
        }

        .closeBtn {
          color: #816BEA;
          font-size: 30px;
          border: none;
          cursor: pointer;
          transition: 0.2s all ease;
        }
        .closeBtn:hover {
          color: #fff;
        }
      }
    }
  }
  .btnArea {
    display: flex;
    button {
      width: 95%;
    }
  }

  @media only screen and (max-width: 1100px) {
    .btnArea {
      button {
        width: 97%;
        font-size: 15px;
      }
    }
  }

  @media only screen and (max-width: 680px) {
    .cardData {
      margin-top: 100px;
      h1 {font-size: 25px}
      p { font-size: 16px; }
    }
    .btnArea {
      flex-direction: column;
      div {
        margin: 10px 0;
      }
    }
  }
`;