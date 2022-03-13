import Dropdown from 'antd/lib/dropdown';
import React, {useEffect, useState} from 'react';
import {Menu} from "antd";
import Button from "../button";
import Regmodal from "/components/regmodal"
import Loginmodal from "../../modals/loginmodal";
import Delmodal from "../../modals/deletemodal";
import Tokenmodal from "../../modals/tokenmodal";
import Toknewmodal from "../../modals/tokenmodalnev";
import Zayavmodalorder from "../../modals/tokenwinmodal";
import Topup from "../../modals/topup";
import Topupv from "../../modals/topup2";
import Zayavmodal from "../../modals/zayavmodal";
import {isAuthorizated} from "../../utils/auth";
const menu = (
    <Menu>
        <Menu.Item>
            <div className="nav-choose_lang">
                <img src="/img/eng.png" alt=""/>
                <span>Eng</span>
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className="nav-choose_lang">
                <img src="/img/russion.png" alt=""/>
                <span>Ru</span>
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className="nav-choose_lang">
                <img src="/img/deu.png" alt=""/>
                <span>Deu</span>
            </div>
        </Menu.Item>
    </Menu>
);

const NavMenu = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsAuth(isAuthorizated());
        let interval;
        if (!isAuth) {
            interval = setInterval(() => {
                setIsAuth(isAuthorizated())
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isAuth])

  function handleToggle() {
     document.getElementById('regmodal').style.display = "block";
   }

    function handleToggleLogin() {
        document.getElementById('login').style.display = "block";
    }
    return (

        <div className="nav-menu">
            <Regmodal />
            <Loginmodal />
            {/*<Tokenmodal /> для меню в аторизации*/}
            {/*<Delmodal /> установленно */}
            {/*<Toknewmodal  установленно/>*/}
            {/*<Zayavmodalorder />  мои токены*/}
            {/*<Topup /> установлена */}
            {/*<Topupv />*/}
            {/*<Zayavmodal /> ecnfyjdk*/}
            {/*<Zayavmodalorder />*/}
            {/*<Zayavmodalorder />*/}
            <div className="container">
                <div className="nav-menu_content">
                    <div className="nav-menu_logo">
                        <img src="/img/logo.png" alt=""/>
                    </div>

                    <div className="nav-menu_auth">
                        <div className="nav-menu_auth-lang">
                            <Dropdown overlay={menu} placement="bottomCenter">
                                <div>
                                    <img src="/img/russion.png" alt=""/>
                                    <span>Рус</span>
                                    <img src="/img/arrow-select.png" alt=""/>
                                </div>
                            </Dropdown>
                        </div>

                        <div className="nav-menu_actions">
                            {isAuth ? 'Авторизован' : <>
                                <Button color={'green'} onClick={handleToggleLogin}>Вход</Button>
                                <Button onClick={handleToggle} color={'submit'}>Регистрация</Button>
                            </>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavMenu;
