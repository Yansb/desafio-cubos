import React from 'react';
import { GlobalStyle } from './assets/styles/global';
import MovieList from './pages/MovieList';

function App() {
  return (
    <div>
      <MovieList />
      <GlobalStyle />
    </div>
  );
}

export default App;
