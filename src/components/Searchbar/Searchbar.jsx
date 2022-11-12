import React from 'react';
import { ButtonIcon, SearchBox } from 'components/Styles/Element.styled';
import { BsSearch } from 'react-icons/bs';
import SearchForm from './SearchForm';
import SearchInput from './SearchInput';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit, onChange, value }) => (
  <SearchBox>
    <SearchForm onSubmit={onSubmit}>
      <ButtonIcon type="submit" aria-label="search button">
        <BsSearch />
      </ButtonIcon>
      <SearchInput value={value} onChange={onChange} />
    </SearchForm>
  </SearchBox>
);
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};