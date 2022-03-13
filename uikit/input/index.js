import React from 'react';
import InputMask from 'react-input-mask';
// clasnames{
//     phonemask,
//     submit,
//     text
// }
// import Input from "../../uikit/input"

const Input = ({placeholder, value, className, type, id, labeltext, mymask,myclick,classlabel}) => {
    return (
        <label htmlFor={id} className={"inplabel "+ classlabel +""} >{labeltext}
            <InputMask onClick={myclick} placeholder={placeholder} value={value} mask={mymask} className={"input "+className+""} type={type} id={id} />
        </label>
    );
}

export default Input;