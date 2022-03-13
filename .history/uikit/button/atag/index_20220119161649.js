import React from 'react';
// addclass[
//     disabled,
//     noimg
// ]
const A = ({addclass, href, linktext, imgalt, imgsrc,setclickname}) => {
    return (
        <a className={'buttonlink '+addclass+''} onClick={setclickname} href={href}>
            {linktext}
            <img src={imgsrc} alt={imgalt}/>
        </a>
    );
}

export default A;