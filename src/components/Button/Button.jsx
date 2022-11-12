import React from 'react';
import { Button } from 'components/Styles/Element.styled';
import PropTypes from 'prop-types';

const ButtonLoadMore = ({ text, onClick }) => (
  <Button type="button" onClick={onClick}>
    {text}
  </Button>
);

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};