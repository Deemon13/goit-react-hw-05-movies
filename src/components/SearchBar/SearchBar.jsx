import React from 'react';
// import PropTypes from 'prop-types';

import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormButtonLabel,
} from './SearchBar.styled';

export function SearchBar() {
  return (
    <SearchForm>
      <SearchFormButton type="submit">
        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
      </SearchFormButton>
      <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
    </SearchForm>
  );
}
