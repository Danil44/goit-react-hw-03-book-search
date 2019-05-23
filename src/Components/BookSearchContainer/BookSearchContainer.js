import React, { Component } from 'react';
import axios from 'axios';
import { PulseLoader } from 'react-spinners';
import genres from '../../genres';
import SearchForm from '../SearchForm/SearchForm';
import BookList from '../BookList/BookList';
import styles from './BookSearchContainer.module.css';

export default class BookSearchContainer extends Component {
  state = { items: [], isLoading: false };

  mapper = data => {
    return data
      .map(({ volumeInfo: book }) => ({ ...book }))
      .map(
        ({
          title,
          description,
          imageLinks: image,
          publisher,
          publishedDate,
          pageCount,
          averageRating: rating,
          authors,
        }) => ({
          title,
          description,
          image,
          publisher,
          publishedDate,
          pageCount,
          rating,
          authors,
        }),
      );
  };

  submit = ({ query, genre }) => {
    this.setState({ isLoading: true });
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}+subject:${genre}`,
      )
      .then(res =>
        this.setState({ items: this.mapper(res.data.items), isLoading: false }),
      )
      .catch(err => console.log(err));
  };

  render() {
    const { items, isLoading } = this.state;
    return (
      <div className={styles.container}>
        <SearchForm onSubmit={this.submit} genres={genres} />
        <div className={styles.spinner}>
          <PulseLoader
            sizeUnit="px"
            size={30}
            color="#36D7B7"
            loading={isLoading}
          />
        </div>

        <BookList items={items} />
      </div>
    );
  }
}
