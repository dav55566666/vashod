import React from 'react';
import InputMask from 'react-input-mask';
// clasnames{
//     phonemask,
//     submit,
//     text
// }

const Input = ({placeholder, value, className, type, id, labeltext, mymask}) => {
    return (
        <label for={id}>{labeltext}
            <InputMask placeholder={placeholder} value={value} mask={mymask} className={"input "+className+""} type={type} id={id} />
        </label>
    );
}

export default Input;