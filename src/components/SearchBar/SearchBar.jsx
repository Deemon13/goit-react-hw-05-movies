import React from 'react';
import PropTypes from 'prop-types';

import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormButtonLabel,
} from './SearchBar.styled';

export function SearchBar({ onSubmitForm }) {
  return (
    <SearchForm onSubmit={onSubmitForm} autoComplete="off">
      <SearchFormButton type="submit">
        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
      </SearchFormButton>
      <SearchFormInput
        type="text"
        name="search"
        autoFocus
        placeholder="Search movie"
      />
    </SearchForm>
  );
}

SearchBar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
