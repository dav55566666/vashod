import React from 'react';
// clasnames{
//     phonemask,
//     submit,
// }
const Input = ({placeholder, value, className, type, id}) => {
    return (
        <label for={id}></label>
        <input placeholder={placeholder} value={value} className={"input"+className+""} type={type} id={id} />
    );
}

export default Input;