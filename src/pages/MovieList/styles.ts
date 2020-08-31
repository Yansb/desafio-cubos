import styled from 'styled-components';
import colors from '../../assets/styles/colors.json';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  form {
  }
`;

export const SearchBar = styled.input`
  display: flex;
  margin: 30px;
  background-color: ${colors.background};
  border: none;
  border-radius: 15px;
  height: 30px;
  padding: 10px;
  font-size: 20px;
  &::placeholder {
    color: ${colors.azulClaro};
    padding-left: 10px;
    font-family: abel;
    font-size: 20px;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2pt ${colors.azulEscuro};
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
