import styled from 'styled-components';
import colors from '../../assets/styles/colors.json';

export const Container = styled.div`
  margin-top: 35px;
  width: 100%;
  height: 490px;
  background-color: ${colors.background};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 18px;
  }

  h1 {
    color: ${colors.azulClaro};
  }
`;

export const ImageContainer = styled.aside`
  display: flex;
  flex-direction: row-reverse;
  img {
    max-width: 350px;
    max-height: 450px;
  }
`;
