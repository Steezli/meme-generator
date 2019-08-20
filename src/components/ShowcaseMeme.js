import React from 'react';
import PropTypes from 'prop-types';

function ShowcaseMeme({ head, imageSrc, foot }) {
  return (
    <>
      <p>{head}</p>
      <img src={imageSrc} />
      <p>{foot}</p>
    </>
  );
}

ShowcaseMeme.propTypes = {
  head: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  foot: PropTypes.string.isRequired
};

export default ShowcaseMeme;

