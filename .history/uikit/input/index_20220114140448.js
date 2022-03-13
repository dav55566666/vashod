import React from 'react';
// clasnames{
//     phonemask,
//     submit,
//     text
// }
const Input = ({placeholder, value, className, type, id, labeltext}) => {
    return (
        <label for={id}>{labeltext}
            <input placeholder={placeholder} value={value} className={"input"+className+""} type={type} id={id} />
        </label>
    );
}

export default Input;