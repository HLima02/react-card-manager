import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2%;

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
  }

  .login--content {
    width: 100%;
    max-width: 550px;
    background-color: #fff;
    padding: 40px 4%;
    border-radius: 15px;
    h2 {
      text-align: center;
      font-size: 35px;
      margin-bottom: 30px;
    }
    label {
      font-size: 18px;
      color: #bbb;
      margin-bottom: 10px;
      display: inline-block;
    }

    input {
      border: none;
      outline: none;
    }

    input[type=email], input[type=password] {
      border-bottom: 2px solid #bbb;
      width: 100%;
      padding: 5px 10px;
      margin-bottom: 20px;
    }

    input[type=submit]{
      display: flex;
      margin: 30px auto;
      width: 100%;
      max-width: 170px;
      height: 40px;
      background-color: #0277BD;
      text-align: center;
      justify-content: center;
      color: #fff;
      font-size: 18px;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.2s all ease-in;
    }
    input[type=submit]:hover {
      background-color: #01579b;
      box-shadow: 0 0 10px #fff inset;
    }

    .forgot {
      color: #0277BD ;
      display: inline-block;
      text-align: center;
      width: 100%;
      line-height: 25px;
      padding: 10px;
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 450px){
    .logo-title{
      padding: 30px 4%;
      margin-bottom: 0;
    }
  }
`;

