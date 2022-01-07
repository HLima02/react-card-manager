import styled from 'styled-components';

export const Container = styled.div`
  background-color: #313237;
  min-height: 100vh;
  width: 100%;
  max-width: 300px;
  min-width: 300px;
  color: #fff;
  display: flex;
  flex-direction: column;
  .logo-title{
    padding: 20px 4%;
    margin-bottom: 0;
    background-color: #806BEB;
    .icon-open-menu {
      display: none;
    }
    h1 a {
      font-family: 'The Nautigal','cursive';
    }
  }
  .analist-datas {
    background-color: #806BEB;
    padding: 10px 4% 50px;
    text-align: center;
    span {
      display: inline-block;
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

  .analist-features {
    width: 100%;
    margin: 50px 0;
    li {
      width: inherit;
      height: 80px;
      padding: 0 4%;
      transition: 0.3s all;
      a {
        display: inline-block;
        font-size: 20px;
        line-height: 80px;
        width: 100%;
      }
    }
    li:hover{
      background-color: #806BEB;
      border-radius: 5px;
    }
  }

  .analist-exit{
    margin: 30px 0;
    padding: 0 4%;
    button {
      display: inline-block;
      padding: 10px 20px;
      border-radius: 8px;
      color: #806BEB;
      font-size: 20px;
      transition: 0.3s all;
      border: none;
      background-color: transparent;
    }
    button:hover {
      background-color: #806BEB;
      color: #fff;
    }
  }

  @media only screen and (max-width: 680px){
    max-width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s all;
    min-height: auto;
    .mobile {
      background-color: transparent;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon-open-menu {
        display: block;
        font-size: 30px;
        cursor: pointer;
      }
    }

    .menu-retratil {
      display: none;
      .analist-datas {
        padding: 30px 4%;
      }
    }
  }
`;