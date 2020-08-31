import React from 'react';
import { Container, HeaderContainer, ImageContainer } from './styles';

import api from '../../services/api';
import { Header } from '../../components/Header';

interface IMovie {
  id: number;
  poster_path?: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: string;
  original_title: string;
  original_language: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
  video: boolean;
  dateFormatted: string;
  item_count: number;
  title: string;
}

interface IDetails {
  id: number;
}

const MovieInfo: React.FC<IDetails> = ({ id }) => {
  return (
    <>
      <Header>Movies</Header>
      <Container>
        <HeaderContainer>
          <h1>Thor: Ragnarok</h1>
          <span>25/10/2017</span>
        </HeaderContainer>
        <ImageContainer>
          <img
            src="https://br.web.img3.acsta.net/pictures/17/08/26/00/05/175443.jpg"
            alt="thor ragnarok"
          />
          <h3>Sinopse</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            quidem enim magni quisquam at eligendi nam? Repellendus
            reprehenderit ipsum veritatis minus, praesentium nemo amet omnis
            nihil accusamus deleniti ad architecto?
          </span>
          <h3>Informações</h3>
          <span>situaçao</span>
        </ImageContainer>
      </Container>
    </>
  );
};

export default MovieInfo;
