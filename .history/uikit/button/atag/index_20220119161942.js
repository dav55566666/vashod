import React from 'react';
// addclass[
//     disabled,
//     noimg
// ]
const A = ({addclass, href, linktext, imgalt, imgsrc,myclick}) => {
    return (
        <a className={'buttonlink '+addclass+''} onClick={""myclick""} href={href}>
            {linktext}
            <img src={imgsrc} alt={imgalt}/>
        </a>
    );
}

export default A;