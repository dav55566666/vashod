import React, {useEffect, useState} from 'react';
// class other = startmenu
const NavMenu = ({setactivlink,otherclass}) => {
    function openmenu(){
        var links = document.getElementsByClassName("linkmenu");
        var nav = document.querySelector(".nav-menu");
        nav.classList.toggle("activemenu")
        if(setactivlink!=""){
            links[setactivlink].classList.add("active")
        }
    }
    return (
        <div className={"nav-menu "+otherclass+""}>
            <div className='openmenubtn'>
                <button onClick={openmenu}>
                    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 15.0222H28V10.9777H0V15.0222ZM0 25.1333H28V21.0889H0V25.1333ZM0 0.866638V4.91108H28V0.866638H0Z" fill="#2B334F"/>
                    </svg>
                    Меню
                </button>
            </div>
            <div className='menu'>
                <ul>
                    <li className='linkmenu'><a href="carview">
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.4668 0.514956L7.9541 1.02991L10.0488 3.13388L12.1436 5.23785H6.07031H0V6.00293V6.76801H6.07031H12.1436L10.0488 8.87198L7.9541 10.9759L8.4668 11.4909C8.74805 11.7734 8.98828 12.0029 9 12C9.01465 11.9941 10.3682 10.6405 12.0117 8.98968L15 5.98822L12.0205 2.99558C10.3799 1.34772 9.02344 0 9.00879 0C8.99121 0 8.74805 0.232466 8.4668 0.514956Z" fill="#747A8F"/>
                        </svg>
                        Пункт меню1    
                    </a></li>
                    <li className='linkmenu'><a href="carspecifik">
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
            <div className='exitbtn'>
                <button>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28 14L22.4 8.4V12.6H11.2V15.4H22.4V19.6L28 14ZM25.2 22.4C23.437 24.7507 20.979 26.4871 18.1743 27.3632C15.3696 28.2393 12.3604 28.2108 9.57281 27.2816C6.78524 26.3524 4.3607 24.5697 2.64261 22.1859C0.924523 19.8022 0 16.9384 0 14C0 11.0616 0.924523 8.19777 2.64261 5.81406C4.3607 3.43034 6.78524 1.64762 9.57281 0.718434C12.3604 -0.210755 15.3696 -0.239312 18.1743 0.636811C20.979 1.51293 23.437 3.24932 25.2 5.6H21.378C19.7614 4.17433 17.7678 3.2454 15.6364 2.92468C13.505 2.60396 11.3263 2.90508 9.36179 3.7919C7.39727 4.67871 5.73036 6.11356 4.5611 7.92426C3.39184 9.73496 2.7699 11.8446 2.7699 14C2.7699 16.1554 3.39184 18.265 4.5611 20.0757C5.73036 21.8864 7.39727 23.3213 9.36179 24.2081C11.3263 25.0949 13.505 25.396 15.6364 25.0753C17.7678 24.7546 19.7614 23.8257 21.378 22.4H25.2Z" fill="#5B6589"/>
                    </svg>
                    Выход
                </button>
            </div>
        </div>
    );
    
}

export default NavMenu;
