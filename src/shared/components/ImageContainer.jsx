import PropTypes from 'prop-types';
const ImageContainer = ({ imageUrl, altText , width = '100%', height = '100%' }) => {
    const containerStyle = {
      width: width, 
      height: height, 
      overflow: 'hidden',
    };
  
    const imageStyle = {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      maxWidth: '100%',
      maxHeight: '100%',
    };
  
    return (
      <div style={containerStyle}>
        <img src={imageUrl} alt={altText} style={imageStyle} />
      </div>
    );
  };
  
  ImageContainer.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
  };
  
  export default ImageContainer;