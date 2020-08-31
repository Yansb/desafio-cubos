import React, { useEffect, useState, FormEvent } from 'react';
import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Container, SearchBar, ButtonContainer, Footer } from './styles';
import Movies from '../../components/Movies';
import api from '../../services/api';

interface IGenres {
  id: string;
  name: string;
}

interface IMovies {
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

const MovieList: React.FC = () => {
  const [genres, setGenres] = useState<IGenres[]>([]);
  const [pages, setPages] = useState(0);
  const history = useHistory();
  const [search, setSearch] = useState('thor');
  const [movies, setMovies] = useState<IMovies[]>([]);

  function handlePageChanging(id: number) {
    setPages(id);
  }

  function NavigateToMovieInfo(movieProps: IMovies) {
    history.push(`/info/${movieProps.id}`);
  }

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

      const data = response.data.results.map((movie: IMovies) => ({
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
  }, [pages, search]);

  async function handleFormSubmit(event: FormEvent): Promise<void> {
    try {
      event.preventDefault();
      setPages(0);

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

      const data = response.data.results.map((movie: IMovies) => ({
        ...movie,
        dateFormatted: movie.release_date
          ? format(parseISO(movie.release_date), 'dd/MM/yyyy', {
              locale: pt,
            })
          : null,
      }));

      setMovies(data);
      setSearch('');
    } catch (error) {
      console.log(error);
      alert('Por favor tente novamente');
    }
  }

  return (
    <Container>
      <Header>Movies</Header>
      <SearchBar>
        <input
          type="text"
          value={search}
          onChange={event => setSearch(event.target.value)}
          placeholder="Busque um filme por nome, ano ou gênero..."
        />
      </SearchBar>
      {movies.slice(pages * 5, pages * 5 + 5).map(movie => (
        <ButtonContainer
          type="button"
          onClick={() => NavigateToMovieInfo(movie)}
        >
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
                  {genres
                    .filter(genre => movie.genre_ids.includes(genre.id))
                    .map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
              </div>
            </div>
          </Movies>
        </ButtonContainer>
      ))}
      <Footer>
        {movies
          .filter((_, idx) => idx % 5 === 0)
          .map((_, idx) => (
            <button type="button" onClick={() => handlePageChanging(idx)}>
              {idx + 1}
            </button>
          ))}
      </Footer>
    </Container>
  );
};

export default MovieList;
