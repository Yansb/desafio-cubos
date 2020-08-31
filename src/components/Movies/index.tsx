import React from 'react';
import { Movie } from './styles';

const Movies: React.FC = ({ children }) => (
  <Movie>
    {children}
  </Movie>
);

export default Movies;
