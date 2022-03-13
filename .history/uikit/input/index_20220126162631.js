import React from 'react';
import InputMask from 'react-input-mask';
// clasnames{
//     phonemask,
//     submit,
//     text
// }
// import Input from "../../uikit/input"

const Input = ({placeholder, value, className, type, id, labeltext, mymask, myclick, dis}) => {
    return (
        <label htmlFor={id}>{labeltext}
            <InputMask {dis} onClick={myclick} placeholder={placeholder} value={value} mask={mymask} className={"input "+className+""} type={type} id={id} />
        </label>
    );
}

export default Input;