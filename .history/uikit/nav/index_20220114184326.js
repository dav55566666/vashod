import React, {useEffect, useState} from 'react';

const NavMenu = ({setactivlink}) => {
    var setactivlink = 0;
    
    for(var i = 0; i < links.length; i++){
        links[setactivlink].classList.add("active")
    }
    return (
        <div className="nav-menu">
            <div>
                <button onClick={openmenu}>
                    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 15.0222H28V10.9777H0V15.0222ZM0 25.1333H28V21.0889H0V25.1333ZM0 0.866638V4.91108H28V0.866638H0Z" fill="#2B334F"/>
                    </svg>
                    Меню
                </button>
            </div>
            <div>
                <ul>
                    <li className='linkmenu'><a href="">
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.4668 0.514956L7.9541 1.02991L10.0488 3.13388L12.1436 5.23785H6.07031H0V6.00293V6.76801H6.07031H12.1436L10.0488 8.87198L7.9541 10.9759L8.4668 11.4909C8.74805 11.7734 8.98828 12.0029 9 12C9.01465 11.9941 10.3682 10.6405 12.0117 8.98968L15 5.98822L12.0205 2.99558C10.3799 1.34772 9.02344 0 9.00879 0C8.99121 0 8.74805 0.232466 8.4668 0.514956Z" fill="#747A8F"/>
                        </svg>
                        Пункт меню1    
                    </a></li>
                    <li className='linkmenu'><a href="">
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.4668 0.514956L7.9541 1.02991L10.0488 3.13388L12.1436 5.23785H6.07031H0V6.00293V6.76801H6.07031H12.1436L10.0488 8.87198L7.9541 10.9759L8.4668 11.4909C8.74805 11.7734 8.98828 12.0029 9 12C9.01465 11.9941 10.3682 10.6405 12.0117 8.98968L15 5.98822L12.0205 2.99558C10.3799 1.34772 9.02344 0 9.00879 0C8.99121 0 8.74805 0.232466 8.4668 0.514956Z" fill="#747A8F"/>
                        </svg>
                        Пункт меню2    
                    </a></li>
                    <li className='linkmenu'><a href="">
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.4668 0.514956L7.9541 1.02991L10.0488 3.13388L12.1436 5.23785H6.07031H0V6.00293V6.76801H6.07031H12.1436L10.0488 8.87198L7.9541 10.9759L8.4668 11.4909C8.74805 11.7734 8.98828 12.0029 9 12C9.01465 11.9941 10.3682 10.6405 12.0117 8.98968L15 5.98822L12.0205 2.99558C10.3799 1.34772 9.02344 0 9.00879 0C8.99121 0 8.74805 0.232466 8.4668 0.514956Z" fill="#747A8F"/>
                        </svg>
                        Пункт меню3    
                    </a></li>
                    <li className='linkmenu'><a href="">
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.4668 0.514956L7.9541 1.02991L10.0488 3.13388L12.1436 5.23785H6.07031H0V6.00293V6.76801H6.07031H12.1436L10.0488 8.87198L7.9541 10.9759L8.4668 11.4909C8.74805 11.7734 8.98828 12.0029 9 12C9.01465 11.9941 10.3682 10.6405 12.0117 8.98968L15 5.98822L12.0205 2.99558C10.3799 1.34772 9.02344 0 9.00879 0C8.99121 0 8.74805 0.232466 8.4668 0.514956Z" fill="#747A8F"/>
                        </svg>
                        Пункт меню4    
                    </a></li>
                </ul>
            </div>
        </div>
    );
    var links = document.getElementsByClassName(".linkmenu");
}

export default NavMenu;
