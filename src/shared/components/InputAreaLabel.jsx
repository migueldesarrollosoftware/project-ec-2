
import Form from 'react-bootstrap/Form';


import PropTypes from 'prop-types';

export const InputAreaLabel = ({label, type, placeholder, name, onChange, className, value}) => {
    return (
      <div className={className}>
        <Form.Label htmlFor={name}>{label}</Form.Label>
        <Form.Control
          as="textarea"
          name={name}
          type={type}
          id={name}
          aria-describedby={`${name}HelpBlock`}
          onChange={onChange}
          placeholder={placeholder}
          rows={6}
          value={value}
        />
        <Form.Text id={`${name}HelpBlock`} muted>
          {placeholder}
        </Form.Text>
      </div>
    );
  }

InputAreaLabel.defaultProps = {
    type: 'text',
    };
InputAreaLabel.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    value: PropTypes.string.isRequired,
    };
    