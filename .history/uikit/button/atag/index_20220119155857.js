import React from 'react';

const A = ({addclass, href, linktext, imgalt, imgsrc}) => {
    return (
            <a className={'buttonlink '+addclass+'' } href={href}>
                {linktext}
                <img src={imgsrc} alt={imgalt}/>
            </a>
    );
}

export default A;