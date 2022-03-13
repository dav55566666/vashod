import React from 'react';
import Button from '../../uikit/button'

const Token = (props) => {
    return (
            <div className='token'>
                <div className='token-img'>
                    <img src={props.path} />
                </div>
                <div className='token-info'>
                    <p className='token-info-name'>{props.name}</p>
                    <p className='token-info-name token-info-production'>{props.production}</p>
                    <div className='token-info-count'>
                        <p>Токенов куплено</p>
                        <p>{props.saled}</p>
                    </div>
                    <div className='token-info-count'>
                        <p>К досрочному погашению</p>
                        <p>{props.torepayment}</p>
                    </div>
                    <div className='token-info-btn'>
                      {props.btn}
                      {props.btn2}
                    </div>
                </div>
            </div>
    )
}

export default Token;
