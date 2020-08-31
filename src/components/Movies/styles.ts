import styled from 'styled-components';
import colors from '../../assets/styles/colors.json';

export const Movie = styled.div`
  display: flex;
  background-color: ${colors.background};
  align-self: center;
  height: 250px;
  width: 90%;
  & + div{
   margin-top: 40px;
  }
  
  img{
    max-height: 250px;
    max-width: 250px;
  }
  
  div.content{
    display: flex;
    flex-direction: column;
    width: 100%;
    
    header{
      display: flex;
      flex-direction: column;
      background-color: ${colors.azulEscuro};
      width: 100%;
      height: 55px;
    h1 {
      font: 36px 'Abel', sans-serif;
      color: ${colors.azulClaro};
      text-align: center;
    }
    div{
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: ${colors.azulEscuro};
      border: 4px solid ${colors.azulClaro};
      margin-top: 22px;
      margin-left: 10px;

      display: flex;
      justify-content: center; 
      align-items: center;
      position: absolute;
      box-shadow: 0 0 0 2.5pt ${colors.azulEscuro};
      span{
        font-size: 22px;
        font-family: abel;
        color: ${colors.azulClaro};
      }
    }
  }
  div.info{
    display: flex;
    flex-direction: column;
    padding: 40px;
    span{
      margin: -40px 0px 30px 40px;
      font-family: abel;
    }
    
    p{
      font-size: 16px;
      font-family: abel;

    }

    ul{
      display: flex;
      li{
        font-family: abel;
        box-shadow: 0 0 0 1pt ${colors.azulEscuro};
        color: ${colors.azulEscuro};
        list-style-type: none;
        margin-left: 10px;
        padding: 0 5px;
        background-color: #fff;
        border-radius: 10px;
      }
    }
  }
  }
`;
