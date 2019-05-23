import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = {
    query: '',
    genre: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  changeOption = option => {
    this.setState({ genre: option.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
  };

  render() {
    const { genres } = this.props;
    const { query } = this.state;
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={query}
          name="query"
          onChange={this.handleChange}
        />
        <Select
          className={styles.genreSelect}
          options={genres}
          onChange={this.changeOption}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    );
  }
}
