import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { DolarFormat } from '../../utils/DolarFormat';
import {
  Container,
  HeaderContainer,
  Content,
  ImageContainer,
  InfoContainer,
  TagContainer,
} from './styles';

import api from '../../services/api';
import { Header } from '../../components/Header';

interface IMovie {
  id: number;
  adult: boolean;
  poster_path?: string;
  budget: number;
  status: string;
  revenue: number;
  overview: string;
  release_date: string;
  genres: IGenres[];
  original_title: string;
  original_language: string;
  popularity: number;
  vote_count: number;
  profit: string;
  spoken_language: string;
  vote_average: number;
  video: boolean;
  dateFormatted: string;
  item_count: number;
  title: string;
  runtime: number;
}

interface IDetails {
  id: number;
}

interface IGenres {
  id: string;
  name: string;
}

const MovieInfo: React.FC<IDetails> = props => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState<IMovie>({} as IMovie);

  function HourToMinutes(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(totalMinutes % 60);
    return `${hours}h${minutes}min`;
  }

  useEffect(() => {
    async function loadMovie() {
      const response = await api.get(`movie/${id}`, {
        params: {
          api_key: 'd9890f102dc9fcf0b442bb23413b8fea',
          language: 'pt-BR',
        },
      });
      console.log(response.data);
      const data = {
        ...response.data,
        dateFormatted: movieInfo.release_date
          ? format(parseISO(movieInfo.release_date), 'dd/MM/yyyy', {
              locale: pt,
            })
          : null,
        runtime: HourToMinutes(response.data.runtime),
        budget: DolarFormat(response.data.budget),
        revenue: DolarFormat(response.data.revenue),
        profit: DolarFormat(response.data.revenue - response.data.budget),
      };
      setMovieInfo(data);
    }
    loadMovie();
  }, [id, movieInfo.release_date]);
  return (
    <>
      <Header>Movies</Header>
      <Container>
        <HeaderContainer>
          <h1>{movieInfo.title}</h1>
          <span>{movieInfo.dateFormatted}</span>
        </HeaderContainer>
        <Content>
          <ImageContainer>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
              alt={movieInfo.title}
            />
          </ImageContainer>

          <InfoContainer>
            <h3>Sinopse</h3>
            <p>{movieInfo.overview}</p>
            <h3>Informações</h3>
            <ul>
              <li>
                <span>Situação</span>
                <strong>{movieInfo.status}</strong>
              </li>

              <li>
                <span>Idioma</span>
                <strong>Inglês</strong>
              </li>

              <li>
                <span>Duração</span>
                <strong>{movieInfo.runtime}</strong>
              </li>

              <li>
                <span>Orçamento</span>
                <strong>{movieInfo.budget}</strong>
              </li>

              <li>
                <span>Receita</span>
                <strong>{movieInfo.revenue}</strong>
              </li>

              <li>
                <span>Lucro</span>
                <strong>{movieInfo.profit}</strong>
              </li>
            </ul>
            <TagContainer>
              <ul>
                {movieInfo.genres?.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>

              <div>
                <span>{movieInfo.vote_average}</span>
              </div>
            </TagContainer>
          </InfoContainer>
        </Content>
      </Container>
    </>
  );
};

export default MovieInfo;
