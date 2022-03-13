import React from 'react';
// addclass[
//     disabled,
//     noimg
// ]
const A = ({addclass, myclick, linktext, imgalt, imgsrc}) => {
    return (
        <a className={'buttonlink '+addclass+''} onClick={myclick}>
            {linktext}
            <img src={imgsrc} alt={imgalt}/>
        </a>
    );
}

export default A;