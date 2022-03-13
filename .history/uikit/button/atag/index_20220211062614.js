import React from 'react';
// addclass[
//     disabled,
//     noimg
// ]
const A = ({addclass, href, linktext, imgalt, imgsrc}) => {
    return (
        <a className={'buttonlink '+addclass+''}>
            {linktext}
            <img src={imgsrc} alt={imgalt}/>
        </a>
    );
}

export default A;