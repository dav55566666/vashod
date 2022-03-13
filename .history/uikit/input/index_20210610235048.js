import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const { placeholder, value, isSearch, type } = props;

    if (type === 'timer') {
        return <div className="timer-input">
            <img src="/img/timer.svg" alt="" />
            <input type={'text'} placeholder={placeholder} value={value} onChange={(e) => console.log(e)} />
            <span>сек.</span>
        </div>
    }

    if (isSearch) {
        return <div className="search-input">
            <img src="/img/search-input.svg" alt="" />
            <input type={type} placeholder={placeholder} value={value} onChange={(e) => console.log(e)} />
        </div>
    }

    return (
        <input placeholder={placeholder} value={value} className="input" type={type} />
    );
}

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isSearch: PropTypes.boolean,
    type: PropTypes.any,
};


Input.defaultProps = {
    isSearch: false,
    type: 'text',
};

export default Input;