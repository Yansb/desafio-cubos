import styled from 'styled-components';
import colors from '../../assets/styles/colors.json';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchBar = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    color: ${colors.azulEscuro};
    width: 90%;
    margin: 30px 0;
    background-color: ${colors.background};
    border: none;
    border-radius: 23px;
    height: 40px;
    padding: 15px;
    padding-left: 30px;
    font-size: 20px;
    &::placeholder {
      color: ${colors.azulEscuro};
      font-family: abel;
      font-size: 20px;
    }
    &:focus {
      outline: none;
    }
  }
`;

export const ButtonContainer = styled.button`
  margin: 0;
  border: none;
  background-color: #fff;
  width: 90%;
  display: flex;
  justify-self: center;
  align-self: center;

  & + button {
    margin-top: 40px;
  }
`;

export const Footer = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  button {
    margin-left: 20px;
    background-color: #fff;
    color: ${colors.azulClaro};
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    &:focus {
      background-color: ${colors.azulEscuro};
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border-color: ${colors.azulClaro};
      box-shadow: 0 0 0 2pt ${colors.azulEscuro};
      border: 2px solid;
      outline: none;
    }
  }
`;
