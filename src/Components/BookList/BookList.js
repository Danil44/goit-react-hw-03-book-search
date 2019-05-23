import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import BookListItem from '../BookListItem/BookListItem';
import styles from './BookList.module.css';

const BookList = ({ items }) => {
  return (
    <ul className={styles.container}>
      {items.map(item => (
        <BookListItem {...item} key={v4()} />
      ))}
    </ul>
  );
};

BookList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BookList;
