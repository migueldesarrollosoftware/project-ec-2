import PropTypes from 'prop-types';
// import {BannerImage} from '../../../shared/components/Index';
export const AuthLayout = ({ children }) => {
    return (
        <div className='container-fluid'>
            <div className='row h-100'>
                <div className='auth__banner col-lg-8 col-md-6 col-sm-6 col-1'>
                </div>
                <div className='auth__content  d-flex flex-column justify-content-center align-items-center col-lg-4  col-md-6 col-sm-6 col-11'>
                    {children}
                </div>
            </div>
        </div>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
}