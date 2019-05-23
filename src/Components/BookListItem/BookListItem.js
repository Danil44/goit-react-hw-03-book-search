import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookListItem.module.css';

const BookListItem = ({
  image,
  title,
  description,
  authors,
  publisher,
  publishedDate,
  pageCount,
  rating,
}) => {
  return (
    <li className={styles.item}>
      <img src={image && image.thumbnail} alt={`${title} thumbnail`} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <span>Authors: {authors.forEach(author => author)}</span>
        <span>Publisher: {publisher}</span>
        <span>Published date: {publishedDate}</span>
        <span>Page count: {pageCount}</span>
        <span>Rating: {rating}</span>
      </div>
    </li>
  );
};

BookListItem.defaultProps = {
  description: '',
  authors: [],
  publisher: 'Publisher is unknown',
  publishedDate: 'Published date is unknown',
  rating: 0,
  pageCount: null,
  image: {},
};

BookListItem.propTypes = {
  image: PropTypes.shape({
    thumbnail: PropTypes.string,
    smallThumbnail: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.string.isRequired),
  publisher: PropTypes.string,
  publishedDate: PropTypes.string,
  pageCount: PropTypes.number,
  rating: PropTypes.number,
};

export default BookListItem;
