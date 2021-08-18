import { useState } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal';

export default function ImageGallery({ items }) {
  const [imageIndex, setImageIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleClick(index) {
    setImageIndex(index);
    setShowModal(true);
  }

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <ul className="ImageGallery">
        {items.map((item, index) => (
          <ImageGalleryItem
            key={index}
            item={item}
            onClick={() => {
              handleClick(index);
            }}
          />
        ))}
      </ul>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img
            src={items[imageIndex].largeImageURL}
            alt={items[imageIndex].tags}
          />
        </Modal>
      )}
    </>
  );
}
ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
