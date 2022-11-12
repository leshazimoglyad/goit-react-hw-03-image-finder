import React from 'react';
import { GalleryItem, Img } from 'components/Styles/Element.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images, openModal }) => {
  return images.map(image => (
    <GalleryItem key={image.id}>
      <Img
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => openModal(image.largeImageURL)}
        loading="lazy"
      />
    </GalleryItem>
  ));
};
ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.exact({
      tags: PropTypes.string,
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};