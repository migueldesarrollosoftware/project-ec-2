import PropTypes from 'prop-types';

const BannerImage = ({src, alt}) => (
        <img src={src} alt={alt} className="banner-img" />
);

BannerImage.propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
};
export default BannerImage;