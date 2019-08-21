import React from 'react';
import PropTypes from 'prop-types';


function MemeInput({ head, imageSrc, foot, handleChange, handleSubmit }) {
  return (
    <>
      <form>
        <input name="head" value={head} placeholder="What should this meme read at the top?" onChange={(event) => handleChange(event)}></input>
        <input name="imageSrc" value={imageSrc} placeholder="What image would you like to use?" onChange={(event) => handleChange(event)}></input>
        <input name="foot" value={foot} placeholder="What should this meme read at the top?" onChange={(event) => handleChange(event)}></input>
      </form>
    </>
  );
}

MemeInput.propTypes = {
  head: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  foot: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MemeInput;
