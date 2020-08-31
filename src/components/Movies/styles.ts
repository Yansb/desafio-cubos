import styled from 'styled-components';
import colors from '../../assets/styles/colors.json';

export const Movie = styled.div`
  display: flex;
  background-color: ${colors.background};
  align-self: center;
  height: 250px;
  width: 90%;
  & + div {
    margin-top: 40px;
  }

  @media screen and (max-width: 560px) {
    height: 500px;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
  }

  img {
    max-height: 250px;
    max-width: 250px;
    @media screen and (max-width: 560px) {
      max-width: 150px;
      max-height: 150px;
    }
  }

  div.content {
    display: flex;
    flex-direction: column;
    width: 100%;

    header {
      display: flex;
      flex-direction: column;
      background-color: ${colors.azulEscuro};
      width: 100%;
      height: 55px;
      h1 {
        overflow: hidden;
        text-overflow: ellipsis;
        font: 36px 'Abel', sans-serif;
        color: ${colors.azulClaro};
        margin-left: 50px;
        padding-left: 30px;
        margin-top: 10px;
      }
      div {
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
        span {
          font-size: 22px;
          font-family: abel;
          color: ${colors.azulClaro};
        }
      }
    }
    div.info {
      display: flex;
      flex-direction: column;
      padding: 40px;
      span {
        margin: -40px 0px 30px 40px;
        font-family: abel;
        color: ${colors.data};
      }

      p {
        font-size: 16px;
        font-family: abel;
        overflow: hidden;
        text-overflow: ellipsis;
        @media screen and (max-width: 560px) {
          font-size: 14px;
        }
      }

      ul {
        display: flex;
        align-items: bottom;
        justify-content: bottom;
        padding-top: 30px;
        margin-top: 90px;
        position: absolute;
        @media screen and (max-width: 560px) {
          margin-top: 190px;
          margin-left: -30px;
          max-width: 50px;
        }

        li {
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
