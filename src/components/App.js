import React from 'react';
import BooksList from '../containers/BooksForm';
import BooksForm from '../containers/BooksList';

const App = () => (
  <div className="container">
    <BooksList />
    <br />
    <BooksForm />
  </div>
);

export default App;
