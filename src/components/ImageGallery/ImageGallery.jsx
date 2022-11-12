import React from 'react';
import { Gallery } from 'components/Styles/Element.styled';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <Gallery>
      <ImageGalleryItem images={images} openModal={openModal} />
    </Gallery>
  );
};
ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.exact({
      tags: PropTypes.string,
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};