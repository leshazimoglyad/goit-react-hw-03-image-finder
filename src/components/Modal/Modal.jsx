import { ModalBox, Overlay } from 'components/Styles/Element.styled';
import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = element => {
    if (element.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImageUrl, tags } = this.props;
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalBox>
          <img src={largeImageUrl} alt={tags} />
        </ModalBox>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};