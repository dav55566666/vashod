import React from 'react';
import InputMask from 'react-input-mask';
// clasnames{
//     phonemask,
//     submit,
//     text
// }

const Input = ({placeholder, value, className, type, id, labeltext, mymask,myclick}) => {
    return (
        <label for={id}>{labeltext}
            <InputMask onClick={myclick} placeholder={placeholder} value={value} mask={mymask} className={"input "+className+""} type={type} id={id} />
        </label>
    );
}

export default Input;