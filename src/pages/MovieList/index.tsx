import React, { useEffect, useState, FormEvent } from 'react';
import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';
import {
  Container,
  Header,
  SearchBar,
  Footer,
} from './styles';
import Movies from '../../components/Movies';
import api from '../../services/api';

interface IGenres {
  id: number;
  name: string;
}

interface IMovies {
  id: number;
  poster_path?: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: string[];
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

const MovieList: React.FC = () => {
  const [genres, setGenres] = useState<IGenres[]>([]);
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState<IMovies[]>([]);

  useEffect(() => {
    async function loadGenres(): Promise<void> {
      const response = await api.get('genre/movie/list', {
        params: {
          api_key: 'd9890f102dc9fcf0b442bb23413b8fea',
          language: 'pt-BR',
        },
      });

      setGenres(response.data.genres);
    }

    loadGenres();
  }, []);

  useEffect(() => {
    async function loadMovies(): Promise<void> {
      const response = await api.get('search/movie', {
        params: {
          api_key: 'd9890f102dc9fcf0b442bb23413b8fea',
          language: 'pt-BR',
          query: search,
          page: 1,
        },
      });

      const data = response.data.results.map((movie:IMovies) => ({
        ...movie,
        dateFormatted: movie.release_date
          ? format(parseISO(movie.release_date), 'dd/MM/yyyy', {
            locale: pt,
          })
          : null,
      }));

      setMovies(data);
    }
    loadMovies();
  });

  async function handleFormSubmit(event: FormEvent): Promise<void> {
    try {
      event.preventDefault();

      const response = await api.get('search/movie', {
        params: {
          api_key: 'd9890f102dc9fcf0b442bb23413b8fea',
          language: 'pt-BR',
          query: search,
          page: 1,
        },
      });

      if (!response.data.results.length) {
        alert('nenhum filme encontrado');
      }

      const data = response.data.results.map((movie:IMovies) => ({
        ...movie,
        dateFormatted: movie.release_date
          ? format(parseISO(movie.release_date), 'dd/MM/yyyy', {
            locale: pt,
          })
          : null,
      }));

      setMovies(data);
    } catch (error) {
      console.log(error);
      alert('Por favor tente novamente');
    }
  }

  return (
    <Container>
      <Header>
        <p>Movies</p>
      </Header>
      <form onSubmit={handleFormSubmit}>
        <SearchBar
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Busque um filme por nome, ano ou gênero..."
        />
      </form>
      {movies.map((movie) => (
        <Movies>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />

          <div className="content">

            <header>
              <h1>{movie.title}</h1>
              <div>
                <span>{movie.vote_average}</span>
              </div>
            </header>
            <div className="info">
              <span>{movie.dateFormatted}</span>
              <p>{movie.overview}</p>

              <ul>
                <li>Ação</li>
                <li>Aventura</li>
                <li>Fantasia</li>
              </ul>
            </div>

          </div>
        </Movies>
      ))}
      <Footer>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </Footer>
    </Container>
  );
};

export default MovieList;
