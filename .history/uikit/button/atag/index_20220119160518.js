import React from 'react';
// addclass[
//     disabled,
//     noimg
// ]
const A = ({addclass, href, linktext, imgalt, imgsrc, color}) => {
    return (
        <a className={'buttonlink '+addclass+''} style={"background: "+color""} href={href}>
            {linktext}
            <img src={imgsrc} alt={imgalt}/>
        </a>
    );
}

export default A;