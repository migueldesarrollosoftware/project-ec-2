import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
const InputLabel = ({label, type, placeholder, name, onChange, className, value}) => {
  return (
    <div className={className}>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        name={name}
        type={type}
        id={name}
        aria-describedby={`${name}HelpBlock`}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      <Form.Text id={`${name}HelpBlock`} muted>
        {placeholder}
      </Form.Text>
    </div>
  );
}

InputLabel.defaultProps = {
    type: 'text',
    };
InputLabel.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    value: PropTypes.string.isRequired,
    };

export default InputLabel;