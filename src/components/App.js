/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */
import React from 'react';
import BooksList from '../containers/BooksForm';
import BooksForm from '../containers/BooksList';

const App = () => (
  <div>
    <BooksList />
    <br />
    <BooksForm />
  </div>
);
export default App;
