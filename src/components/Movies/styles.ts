import styled from 'styled-components';
import colors from '../../assets/styles/colors.json';

export const Movie = styled.div`
  display: flex;
  background-color: ${colors.background};
  position: relative;
  align-self: center;
  height: 250px;
  width: 100%;
  border: none;
  & + div {
    margin-top: 40px;
  }

  @media screen and (max-width: 1123px) {
    height: 900px;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
  }

  img {
    max-height: 250px;
    max-width: 250px;
    @media screen and (max-width: 1123px) {
      max-width: 100%;
      max-height: 600px;
      height: 600px;
    }
    @media screen and (max-width: 1123px) {
      height: auto;
    }
  }

  div.content {
    display: flex;
    flex-direction: column;
    width: 100%;

    header {
      display: flex;
      flex-direction: row;
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
        display: flex;
        margin: -36px 0px 30px 40px;
        font-size: 16px;
        font-family: abel;
        color: ${colors.data};
        @media screen and (max-width: 1123px) {
          margin: -30px 0px 10px 0px;
          justify-self: center;
          align-self: center;
        }
      }

      p {
        text-align: left;
        font-size: 16px;
        font-family: abel;
        overflow: hidden;
        text-overflow: ellipsis;
        @media screen and (max-width: 1123px) {
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
        bottom: 12px;
        @media screen and (max-width: 1123px) {
          margin-top: 190px;
          margin-left: -30px;
        }

        li {
          font-family: abel;
          box-shadow: 0 0 0 1pt ${colors.azulEscuro};
          color: ${colors.azulEscuro};
          list-style-type: none;
          margin-left: 10px;
          padding: 3px 10px;
          background-color: #fff;
          border-radius: 10px;
          @media screen and (max-width: 1123px) {
            margin-left: 4px;
          }
        }
      }
    }
  }
`;
