import PropTypes from 'prop-types';

const Button = (props) => {
    return <button type={props.type} className='mt-2 mb-2 w-full bg-yellow-500 p-3 rounded-2xl text-white transition-all hover:bg-yellow-700' >{props.text}</button>
}

Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
};

Button.defaultProps = {
    type: 'button',
};

export default Button;
